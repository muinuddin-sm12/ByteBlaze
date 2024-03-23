import Hero from "../components/Hero"
import wave from "../images/wave.svg"
const Home = () => {
  return (
    <div className="relative">
        <Hero></Hero>
        <img className="absolute bottom-0 w-full" src={wave} alt="" />
    </div>
  )
}

export default Home