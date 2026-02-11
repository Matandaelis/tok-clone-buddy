import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "var(--gradient-hero)" }}>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full border-2 border-white/60 flex items-center justify-center mx-auto mb-4">
            <Mic className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">Join TokShop</h1>
          <p className="text-white/70 mt-2">Create your account and start shopping live</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-white/80 text-sm">First Name</Label>
                <Input placeholder="Jane" className="mt-1.5 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl" />
              </div>
              <div>
                <Label className="text-white/80 text-sm">Last Name</Label>
                <Input placeholder="Doe" className="mt-1.5 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl" />
              </div>
            </div>
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
            <Button className="w-full rounded-xl h-12 bg-white text-black font-semibold hover:bg-white/90">
              Create Account
            </Button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-white/60 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-white font-medium hover:underline">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
