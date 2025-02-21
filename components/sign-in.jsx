import { signIn } from "@/configuration/auth"
 
export default function SignIn() {
  return (
    <div>
        <form
      action={async () => {
        await signIn("google")
       
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
    <form
      action={async (formData) => {
        await signIn("credentials", formData)
      }}
    >
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Sign In</button>
    </form>
    </div>
  )
} 