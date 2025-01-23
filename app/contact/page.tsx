"use client"


import { Button, TextField } from "@/components";
import TextArea from "@/components/input/TextArea";
import api from "@/lib/api";
import show from "@/lib/toast";
import validate from "@/lib/validate";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ContactPage() {
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [user, setUser] = useState<any>(null)
    const [formError, setFormError] = useState<any>(null)
    useEffect(() => {
        validate.supportForm(formError)
    }, [formError])


    const submit = () => {
        if (!user || (!user.fullName || !user.email || !user.phone || !user.message)) {
            show.error(`Form validation error. Please fill all the form fields and submit the form again.`)
        }
        else {
            setLoading(true)
            const payload = {
                "emails": ["liverfil@gmail.com"],
                "subject": `Customer Support - ${user?.fullName}`,
                "message": `
                            Full Name: ${user?.fullName}
                            Phone Number: ${user?.phone}
                            Email: ${user?.email}
                            Message: ${user?.message}
                        `
            }
            api.create(payload, "/send-support-email")
                .then(() => {
                    setUser(null)
                    show.success(`Message sent successfully.`)
                    setOpen(false)
                    setLoading(false)
                })
                .catch(() => {
                    show.error(`Unable to send message. Try later`)
                    setOpen(false)
                    setLoading(false)
                })
        }
    }


    return <div className="py-24 md:py-32 w-[90%] md:max-x-7xl mx-auto">
        <section className="bg-white py-8 md:pt-16">
            <div className="w-full md:max-w-[600px] mx-auto">
                <div className='mx-auto w-full md:max-w-3xl'>
                    <h1 style={{ lineHeight: 1.2 }}
                        className="text-[#00084d] title2 text-2xl md:text-6xl font-[900] md:text-center">
                       How can we help ?
                    </h1>
                    <div className="py-4 ">
                        <h2 style={{ lineHeight: 1.3 }}
                            className="md:text-center text-base md:text-lg font-[400] text-gray-600">
                           We help you identify emerging opportunities, develop robust business models, 
                           and create sustainable competitive advantages.
                        </h2>
                    </div>
                </div>
            </div>
        </section >

        <section className="bg-white">
            <div className="w-[90%] max-w-7xl mx-auto py-16" data-aos="fade-up" data-aos-duration="500">
                <div className="w-full md:max-w-[600px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <TextField
                                label="Full Name"
                                type="text"
                                placeholder="Enter your name"
                                onChange={(e: string) => {
                                    setUser({ ...user, fullName: e })
                                    setFormError({ ...formError, fullName: validate.fullName(e) ? undefined : 'Invalid full name' })
                                }}
                                value={user?.fullName || ""}
                                error={formError?.fullName}
                                isRequired
                            />
                        </div>

                        <div>
                            <TextField
                                label="Phone Number"
                                placeholder="Enter your phone number"
                                onChange={(e: string) => {
                                    setUser({ ...user, phone: e })
                                    setFormError({ ...formError, phone: validate.phoneNumber(e) ? undefined : 'Invalid phone number' })
                                }}
                                value={user?.phone || ""}
                                error={formError?.phone}
                                isRequired
                            />
                        </div>
                    </div>
                    <div>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="Enter your email address"
                            onChange={(e: string) => {
                                const rawInput = `${e}`.replaceAll(/\s/g, '')
                                const input = `${rawInput.toLowerCase()}`
                                setUser({ ...user, email: input })
                                setFormError({ ...formError, email: validate.email(input) ? undefined : 'Invalid email address' })
                            }}
                            value={user?.email || ""}
                            error={formError?.email}
                            isRequired
                        />
                    </div>
                    <div>
                        <TextArea
                            label="Message"
                            type="text"
                            placeholder="Enter your message"
                            onChange={(e: string) => {
                                setUser({ ...user, message: e })
                                setFormError({ ...formError, message: e.length > 10 ? undefined : 'Message must be atleast 30 characters.' })
                            }}
                            value={user?.message || ""}
                            error={formError?.message}
                            isRequired
                            isTextArea
                            rows={6}
                        />
                    </div>
                    <div className="py-6 flex">
                        <Button
                            disabled={!validate.supportForm(formError) || loading}
                            bgColor={!validate.supportForm(formError) || loading ? 'bg-gray-400' : 'border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700'}
                            title={loading ? 'Sending message ...' : "Send a message"}
                            isLoading={loading}
                            onclick={submit}
                        />
                    </div>
                </div>
            </div>
        </section>
    </div >
}