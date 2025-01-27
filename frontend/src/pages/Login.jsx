import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-500 text-center">
          Login to continue exploring your account.
        </p>
        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1 relative">
              <input
                type={visible ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                required
              />
              {visible ? (
                <AiOutlineEye
                  className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
                  size={20}
                  onClick={() => setVisible(false)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
                  size={20}
                  onClick={() => setVisible(true)}
                />
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 text-sm text-gray-600"
              >
                Remember me
              </label>
            </div>
            <a
              href="#forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none text-sm font-medium"
          >
            Sign In
          </button>
        </form>
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-600">Don’t have an account?</p>
          <button className="w-full py-2 px-4 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 focus:ring focus:ring-blue-300 focus:outline-none text-sm font-medium">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
