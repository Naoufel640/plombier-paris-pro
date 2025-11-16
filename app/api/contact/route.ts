import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const form = await request.formData();
  const name = String(form.get("name") || "");
  const phone = String(form.get("phone") || "");
  const email = String(form.get("email") || "");
  const service = String(form.get("service") || "");
  const street = String(form.get("street") || "");
  const zipcity = String(form.get("zipcity") || "");
  const urgency = String(form.get("urgency") || "");
  const slot = String(form.get("slot") || "");
  const message = String(form.get("message") || "");
  const photo = form.get("photo") as File | null;

  // Champs minimum obligatoires
  if (!name || !phone || !message) {
    return NextResponse.json(
      { ok: false, error: "Champs requis manquants." },
      { status: 400 }
    );
  }

  // ⚠️ On aligne sur les variables que tu as mises sur Vercel :
  // MAIL_HOST, MAIL_PORT, MAIL_SECURE, MAIL_USER, MAIL_PASS
  const host = process.env.MAIL_HOST;
  const port = Number(process.env.MAIL_PORT || 587);
  const user = process.env.MAIL_USER;
  const pass = process.env.MAIL_PASS;

  // Pour IONOS : port 587 -> STARTTLS (secure = false), port 465 -> SSL (secure = true)
  const secure = port === 465;

  const to = process.env.MAIL_TO || user || "";
  const from = process.env.MAIL_FROM || user || "";

  if (!host || !user || !pass) {
    console.error("SMTP config manquante", { host: !!host, user: !!user, pass: !!pass });
    return NextResponse.json(
      { ok: false, error: "Config SMTP manquante." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    tls: {
      // IONOS est parfois un peu strict, ça évite certains rejets de certif
      rejectUnauthorized: false,
    },
  });

  const row = (label: string, val: string) =>
    val
      ? `<tr>
           <td style="padding:8px 12px;border-bottom:1px solid #eef3f7;"><b>${label}</b></td>
           <td style="padding:8px 12px;border-bottom:1px solid #eef3f7;">${val}</td>
         </tr>`
      : "";

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;background:#f6fafc;padding:24px">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:720px;margin:auto;background:#fff;border:1px solid #e6f0f7;border-radius:16px;overflow:hidden">
        <tr>
          <td style="background:#0ea5e9;color:#fff;padding:16px 20px;font-weight:600;font-size:18px">
            📩 Nouvelle demande – Moha Services
          </td>
        </tr>
        <tr>
          <td style="padding:8px 0">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
              ${row("Nom", name)}
              ${row("Téléphone", phone)}
              ${row("Email", email)}
              ${row("Adresse", street)}
              ${row("CP & Ville", zipcity)}
              ${row("Service", service)}
              ${row("Urgence", urgency)}
              ${row("Créneau", slot)}
              ${row("Message", message.replace(/\n/g, "<br/>"))}
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 20px;color:#64748b;font-size:12px">
            Email automatique envoyé depuis le site.
          </td>
        </tr>
      </table>
    </div>
  `;

  const attachments: any[] = [];
  if (photo && typeof photo === "object") {
    const buf = Buffer.from(await photo.arrayBuffer());
    attachments.push({
      filename: photo.name || "photo.jpg",
      content: buf,
      contentType: photo.type || "image/jpeg",
    });
  }

  try {
    await transporter.sendMail({
      to,
      from,
      subject: `Demande de contact – ${name} (${phone})`,
      html,
      attachments,
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("Erreur envoi mail:", e?.message || e);
    return NextResponse.json(
      { ok: false, error: "Échec d'envoi du mail." },
      { status: 500 }
    );
  }
}
