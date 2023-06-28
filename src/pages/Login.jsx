import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { login } from "../services";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/reducers/userReducers";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.user);

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => {
      return login({ email, password });
    },
    onSuccess: (data) => {
      dispatch(setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const submitHandler = (data) => {
    const { email, password } = data;
    mutate({ email, password });
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  return (
    <>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
            Login
          </h1>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="email"
                className="text-[#5a718] font-semibold block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email.",
                  },
                })}
                placeholder="Enter email"
                className={`placeholder:text-[#959ead] text-dark-hard mt-1 rounded-lg px-2 py-3 font-semibold block outline-none border ${
                  errors.email ? "border-red-500" : "border-[#c3cad9]"
                }`}
              />
              {errors.email?.message && (
                <p className=" text-red-500 text-xs mt-1">
                  {errors.email?.message}
                </p>
              )}
            </div>

            <div className="flex flex-col mb-0 w-full">
              <label
                htmlFor="password"
                className="text-[#5a718] font-semibold block"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password length must be at least 6 characters",
                  },
                })}
                placeholder="Enter password"
                className={`placeholder:text-[#959ead] text-dark-hard mt-1 rounded-lg px-2 py-3 font-semibold block outline-none border ${
                  errors.password ? "border-red-500" : "border-[#c3cad9]"
                }`}
              />
              {errors.password?.message && (
                <p className=" text-red-500 text-xs mt-1">
                  {errors.password?.message}
                </p>
              )}
            </div>

            <Link
              to="/forgotten-password"
              className="text-sm font-semibold text-primary hover:underline"
            >
              Forgot Password?
            </Link>

            <button
              type="submit"
              disabled={!isValid || isLoading}
              className="bg-primary text-white font-bold text-lg py-3 px-8 w-full rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Login
            </button>
            <p className="text-sm font-semibold text-[#5a7184]">
              No account yet?{" "}
              <Link to="/register" className="text-primary hover:underline">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
