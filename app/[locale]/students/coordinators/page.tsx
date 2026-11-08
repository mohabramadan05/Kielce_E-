import Hero from "../../../../components/ui/students/coordinators/hero"
import Coordinators from "../../../../components/ui/students/coordinators/coordinators"
import Admin from "../../../../components/ui/students/coordinators/admin"
import Dept from "../../../../components/ui/students/coordinators/dept"

export default async function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Hero/>
        <Coordinators/>
        <Admin/>
        <Dept/>
    </div>
  );
}
