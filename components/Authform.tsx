'use client';

import { register, signin } from "@/lib/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";

const registerContent = {
  linkUrl: '/employer-signin',
  linkText: "Already have an account?",
  header: 'Create Employer Account',
  subheader: 'Just a few things to get started',
  buttonText: 'Register'
}

const signinContent = {
  linkUrl: '/employer-register',
  linkText: "Don't have an account?",
  header: 'Welcome back!',
  subheader: 'Enter your details to access your account',
  buttonText: 'Sign In'
}

const initial = {email: '', password: '', firstName: '', lastName: ''}

const AuthForm = ({mode}) => {
  const [formState, setFormState] = useState({...initial})
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (mode === 'register') {
        await register(formState)
        console.log('yolo')
      } else {
        await signin(formState)
      }
  
      router.push('/employer-home')
      setFormState(initial)
    } catch(e) {
      console.error(e)
    }
  }

  const content = mode === 'register' ? registerContent : signinContent

  return (
    <Card>
      <div className="w-full ">
        <div className="text-center">
          <div className="text-2xl">{content.header}</div>
          <p className="text-base text-black/70">{content.subheader}</p>
        </div>
        <form onSubmit={handleSubmit} className="py-8 w-full">
          {mode === "register" && (
            <div className="flex mb-2 justify-between">
              <div className="pr-2">
                <div className="text-base mb-4 ml-2 text-black">
                  First Name
                </div>
                <Input
                  required
                  placeholder="First Name"
                  value={formState.firstName}
                  className="bg-btnSecondary border-solid border-BgPrimary border-2 px-6 py-2 text-sm  rounded-none w-full"
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, firstName: e.target.value }))
                  }
                />
              </div>
              <div className="pl-2">
                <div className="text-base  mb-4 ml-2 text-black">Last Name</div>
                <Input
                  required
                  placeholder="Last Name"
                  value={formState.lastName}
                  className="bg-btnSecondary border-solid border-BgPrimary border-2 px-2 py-1 text-sm  rounded-none w-full"
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, lastName: e.target.value }))
                  }
                />
              </div>
            </div>
          )}
          <div className="mb-4">
            <div className="text-base mb-4 ml-2 text-black">Email</div>
            <Input
              required
              type="email"
              placeholder="Email"
              value={formState.email}
              className="bg-btnSecondary border-solid border-BgPrimary border-2 px-2 py-1 text-sm  rounded-none w-full"
              onChange={(e) =>
                setFormState((s) => ({ ...s, email: e.target.value }))
              }
            />
          </div>
          <div className="mb-6">
            <div className="text-base mb-4 ml-2 text-black">Password</div>
            <Input
              required
              value={formState.password}
              type="password"
              placeholder="Password"
              className="bg-btnSecondary border-solid border-BgPrimary border-2 px-2 py-1 text-sm  rounded-none w-full"
              onChange={(e) =>
                setFormState((s) => ({ ...s, password: e.target.value }))
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span>
                <Link
                  href={content.linkUrl}
                  className="text-btnPrimary font-bold"
                >
                  {content.linkText}
                </Link>
              </span>
            </div>
            <div>
              <Button type="submit" intent="primary">
                {content.buttonText}
              </Button>
            </div>
          </div>
          <div className="text-neutral-400 text-xs mt-4">By clicking Sign Up, you agree to our <a href=""  className="text-BgSecondary font-bold">Terms of Service</a>. Learn how we collect, use and share your data in our <a href="#" className="text-BgSecondary font-bold"> Privacy Policy</a> and how we use cookies and similar technology in our <a href="#" className="text-BgSecondary font-bold">Cookie Policy</a>.</div>
        </form>
      </div>
    </Card>
  )
}


export default AuthForm;
