'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phnumber: '',
    classes: '',
    address: '',
    Message: '',
  })
  const [loader, setLoader] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    // Message is optional, so check all fields except Message
    const isValid = 
      formData.firstname.trim() !== '' &&
      formData.lastname.trim() !== '' &&
      formData.phnumber.trim() !== '' &&
      formData.classes.trim() !== '' &&
      formData.address.trim() !== ''
    setIsFormValid(isValid)
  }, [formData])
  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const reset = () => {
    setFormData({
      firstname: '',
      lastname: '',
      phnumber: '',
      classes: '',
      address: '',
      Message: '',
    })
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    console.log('[ContactForm] Form submission started')
    console.log('[ContactForm] Form data:', formData)
    setLoader(true)

    // Get Telegram credentials from environment variables
    // WARNING: Using bot token directly in client-side code exposes it publicly
    // Consider using a serverless function for production
    const BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
    const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID
    
    console.log('[ContactForm] BOT_TOKEN exists:', !!BOT_TOKEN)
    console.log('[ContactForm] CHAT_ID exists:', !!CHAT_ID)
    console.log('[ContactForm] CHAT_ID value:', CHAT_ID || 'Not configured')
    
    // Prepare form data
    const formPayload = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      phnumber: formData.phnumber,
      classes: formData.classes,
      address: formData.address,
      Message: formData.Message || 'No message provided',
    }
    console.log('[ContactForm] Prepared payload:', formPayload)

    try {
      // Check if Telegram credentials are configured
      if (!BOT_TOKEN || !CHAT_ID) {
        console.error('[ContactForm] ❌ Telegram credentials not configured')
        console.error('[ContactForm] Missing:', {
          BOT_TOKEN: !BOT_TOKEN,
          CHAT_ID: !CHAT_ID,
        })
        setLoader(false)
        toast.error('Form submission service is not configured. Please contact us directly.', {
          duration: 5000,
          position: 'top-center',
        })
        return
      }

      // Format the message for Telegram
      const telegramMessage = `🎓 *New Admission Inquiry*

👤 *Name:* ${formPayload.firstname} ${formPayload.lastname}
📱 *Phone:* ${formPayload.phnumber}
📚 *Class:* ${formPayload.classes}
📍 *Address:* ${formPayload.address}
💬 *Message:*
${formPayload.Message}

_Submitted from Shree's Academy Website_`

      console.log('[ContactForm] Formatted Telegram message:')
      console.log('[ContactForm]', telegramMessage)
      console.log('[ContactForm] Message length:', telegramMessage.length)

      // Send directly to Telegram API
      const telegramApiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`
      console.log('[ContactForm] Sending to Telegram API (token hidden)')
      
      const telegramPayload = {
        chat_id: CHAT_ID,
        text: telegramMessage,
        parse_mode: 'Markdown',
      }
      console.log('[ContactForm] Telegram payload:', {
        ...telegramPayload,
        text: `[Message length: ${telegramPayload.text.length} chars]`,
      })
      
      console.log('[ContactForm] Making Telegram API request...')
      const startTime = Date.now()
      
      const telegramResponse = await fetch(telegramApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(telegramPayload),
      })

      const fetchTime = Date.now() - startTime
      console.log(`[ContactForm] Telegram API request completed in ${fetchTime}ms`)
      console.log('[ContactForm] Telegram response status:', telegramResponse.status, telegramResponse.statusText)
      console.log('[ContactForm] Telegram response ok:', telegramResponse.ok)

      if (telegramResponse.ok) {
        try {
          const telegramData = await telegramResponse.json()
          console.log('[ContactForm] Telegram API response:', JSON.stringify(telegramData, null, 2))
          
          if (telegramData.ok) {
            console.log('[ContactForm] ✅ Telegram notification sent successfully')
            console.log('[ContactForm] Message ID:', telegramData.result?.message_id)
            reset()
            setLoader(false)
            toast.success('Message sent successfully! We will get back to you soon.', {
              duration: 5000,
              position: 'top-center',
              icon: '✅',
              style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
                padding: '16px',
              },
            })
            return
          } else {
            console.warn('[ContactForm] ⚠️ Telegram API returned ok: false')
            console.warn('[ContactForm] Error code:', telegramData.error_code)
            console.warn('[ContactForm] Error description:', telegramData.description)
            
            // Show specific error message based on Telegram API error
            const errorMessage = telegramData.description 
              ? `Failed to send message: ${telegramData.description}`
              : 'Failed to submit form. Please try again.'
            
            toast.error(errorMessage, {
              duration: 6000,
              position: 'top-center',
              icon: '❌',
              style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
                padding: '16px',
              },
            })
            setLoader(false)
          }
        } catch (err) {
          const error = err as Error
          console.error('[ContactForm] ❌ Error parsing Telegram response:', error)
          console.error('[ContactForm] Error details:', {
            message: error.message,
            stack: error.stack,
          })
        }
      } else {
        console.error('[ContactForm] ❌ Telegram response not OK:', telegramResponse.status, telegramResponse.statusText)
        try {
          const errorText = await telegramResponse.json()
          console.error('[ContactForm] Telegram error response:', JSON.stringify(errorText, null, 2))
          console.error('[ContactForm] Error code:', errorText.error_code)
          console.error('[ContactForm] Error description:', errorText.description)
          
          // Show specific error message
          const errorMessage = errorText.description 
            ? `Failed to send message: ${errorText.description}`
            : `Failed to submit form. Error code: ${errorText.error_code || 'Unknown'}`
          
          toast.error(errorMessage, {
            duration: 6000,
            position: 'top-center',
            icon: '❌',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
              padding: '16px',
            },
          })
          setLoader(false)
          return
        } catch (err) {
          const error = err as Error
          console.error('[ContactForm] Could not parse error response:', error)
          console.error('[ContactForm] Error details:', {
            message: error.message,
            stack: error.stack,
          })
        }
      }

      // Telegram failed - generic error
      console.error('[ContactForm] ❌ Telegram submission failed')
      setLoader(false)
      toast.error('Failed to submit form. Please try again or contact us directly.', {
        duration: 5000,
        position: 'top-center',
        icon: '❌',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          padding: '16px',
        },
      })
    } catch (error) {
      setLoader(false)
      const err = error as Error
      console.error('[ContactForm] ❌ Form submission exception:', err)
      console.error('[ContactForm] Error details:', {
        message: err.message,
        stack: err.stack,
        name: err.name,
      })
      toast.error('An error occurred. Please try again.', {
        duration: 5000,
        position: 'top-center',
        icon: '❌',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          padding: '16px',
        },
      })
    }
  }
  return (
    <>
      <Toaster
        position='top-center'
        reverseOrder={false}
        gutter={8}
        containerClassName=''
        containerStyle={{}}
        toastOptions={{
          // Default options for all toasts
          className: '',
          duration: 5000,
          style: {
            background: '#333',
            color: '#fff',
          },
          // Success toast
          success: {
            duration: 5000,
            iconTheme: {
              primary: '#4ade80',
              secondary: '#fff',
            },
            style: {
              borderRadius: '10px',
              padding: '16px',
              fontSize: '16px',
            },
          },
          // Error toast
          error: {
            duration: 5000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
            style: {
              borderRadius: '10px',
              padding: '16px',
              fontSize: '16px',
            },
          },
        }}
      />
      <section id='contact' className='p-0'>
        <div className='container'>
          <div className='relative'>
          <form
            onSubmit={handleSubmit}
            className='flex flex-wrap w-full m-auto justify-between'>
            <div className='sm:flex gap-3 w-full'>
              <div className='mx-0 my-2.5 flex-1'>
                <label htmlFor='fname' className='pb-3 inline-block text-base'>
                  First Name
                </label>
                <input
                  id='fname'
                  type='text'
                  name='firstname'
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder='John'
                  className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                />
              </div>
              <div className='mx-0 my-2.5 flex-1'>
                <label htmlFor='lname' className='pb-3 inline-block text-base'>
                  Last Name
                </label>
                <input
                  id='lname'
                  type='text'
                  name='lastname'
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder='Doe'
                  className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                />
              </div>
            </div>
            <div className='sm:flex gap-3 w-full'>
              <div className='mx-0 my-2.5 flex-1'>
                <label
                  htmlFor='Phnumber'
                  className='pb-3 inline-block text-base'>
                  Phone Number
                </label>
                <input
                  id='Phnumber'
                  type='tel'
                  name='phnumber'
                  placeholder='+1234567890'
                  value={formData.phnumber}
                  onChange={handleChange}
                  className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                />
              </div>
              <div className='mx-0 my-2.5 flex-1'>
                <label htmlFor='classes' className='pb-3 inline-block text-base'>
                  Classes
                </label>
                <select
                  id='classes'
                  name='classes'
                  value={formData.classes}
                  onChange={handleChange}
                  className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0 bg-white'>
                  <option value=''>Select a class</option>
                  <option value='8th'>8th</option>
                  <option value='9th'>9th</option>
                  <option value='10th'>10th</option>
                  <option value='11th'>11th</option>
                  <option value='12th'>12th</option>
                  <option value='JEE'>JEE</option>
                  <option value='NEET'>NEET</option>
                  <option value='MHTCET'>MHTCET</option>
                </select>
              </div>
            </div>
            <div className='w-full mx-0 my-2.5'>
              <label htmlFor='address' className='pb-3 inline-block text-base'>
                Address
              </label>
              <input
                id='address'
                type='text'
                name='address'
                placeholder='Enter your address'
                value={formData.address}
                onChange={handleChange}
                required
                className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
              />
            </div>
            <div className='w-full mx-0 my-2.5'>
              <label htmlFor='message' className='text-base inline-block'>
                Message
              </label>
              <textarea
                id='message'
                name='Message'
                value={formData.Message}
                onChange={handleChange}
                className='w-full mt-2 rounded-2xl px-5 py-3 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                placeholder='Anything else you wanna communicate'></textarea>
            </div>
            <div className='mx-0 my-2.5 w-full'>
              <button
                type='submit'
                disabled={!isFormValid || loader}
                className={`border leading-none px-6 text-lg font-medium py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 min-w-[140px]
                    ${
                      !isFormValid || loader
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-primary border-primary text-white hover:bg-transparent hover:text-primary cursor-pointer hover:scale-105'
                    }`}>
                {loader ? (
                  <>
                    <svg
                      className='animate-spin h-5 w-5'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'>
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                    </svg>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Submit</span>
                )}
              </button>
            </div>
          </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm

