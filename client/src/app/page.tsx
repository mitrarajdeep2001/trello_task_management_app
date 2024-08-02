import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import TaskBoard from "@/components/TaskBoard";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

const Home: React.FC = () => {
  // const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  // const router = useRouter();
  // useEffect(() => {
  //   if (!token) {
  //     router.push("/login");
  //   }
  // }, [token, router]);

  return (
    <div className="flex bg-[#DEDEDE]">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <TaskBoard />
      </div>
    </div>
  );
};

export default Home;
