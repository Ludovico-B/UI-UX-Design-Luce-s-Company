"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
    const nome = formData.get("nome") as string
    const cognome = formData.get("cognome") as string
    const email = formData.get("email") as string
    const telefono = formData.get("telefono") as string
    const servizio = formData.get("servizio") as string
    const messaggio = formData.get("messaggio") as string

    try {
        const { data, error } = await resend.emails.send({
            from: "Luce Connessa Impianti <onboarding@resend.dev>",
            to: ["amministrazione@luceconnessaimpianti.it"],
            subject: `Nuova richiesta preventivo: ${servizio}`,
            replyTo: email,
            html: `
        <h2>Nuova richiesta di contatto dal sito</h2>
        <p><strong>Nome:</strong> ${nome} ${cognome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${telefono || "Non fornito"}</p>
        <p><strong>Servizio:</strong> ${servizio}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${messaggio.replace(/\n/g, "<br>")}</p>
      `,
        })

        if (error) {
            console.error("Resend error:", error)
            return { success: false, error: error.message }
        }

        return { success: true }
    } catch (err: any) {
        console.error("Send email error:", err)
        return { success: false, error: err.message || "Qualcosa è andato storto" }
    }
}
