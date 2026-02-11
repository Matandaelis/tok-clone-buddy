import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "var(--gradient-hero)" }}>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full border-2 border-white/60 flex items-center justify-center mx-auto mb-4">
            <Mic className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-white/70 mt-2">Log in to your TokShop account</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <div className="space-y-4">
            <div>
              <Label className="text-white/80 text-sm">Email</Label>
              <Input placeholder="you@example.com" className="mt-1.5 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl" />
            </div>
            <div>
              <Label className="text-white/80 text-sm">Password</Label>
              <div className="relative mt-1.5">
                <Input type={showPassword ? "text" : "password"} placeholder="••••••••" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl pr-10" />
                <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div className="text-right">
              <a href="#" className="text-xs text-white/60 hover:text-white">Forgot password?</a>
            </div>
            <Button className="w-full rounded-xl h-12 bg-white text-black font-semibold hover:bg-white/90">
              Log In
            </Button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-white/60 text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-white font-medium hover:underline">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
