import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { nome, email, telefone } = await req.json();

    // Log the lead data for now. Email sending can be activated with Resend later.
    console.log("New lead captured:", { nome, email, telefone, timestamp: new Date().toISOString() });

    // TODO: When Resend is configured, uncomment and use:
    // const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    // await fetch("https://api.resend.com/emails", {
    //   method: "POST",
    //   headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     from: "VitaSigma Bot <noreply@vitasigma.com.br>",
    //     to: "contato@vitasigma.com.br",
    //     subject: `Novo lead do chatbot: ${nome}`,
    //     html: `<h2>Novo lead capturado pelo chatbot</h2><p><strong>Nome:</strong> ${nome}</p><p><strong>E-mail:</strong> ${email}</p><p><strong>Telefone:</strong> ${telefone}</p><p><strong>Data:</strong> ${new Date().toLocaleString("pt-BR")}</p>`,
    //   }),
    // });

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("send-lead-email error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Erro" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
