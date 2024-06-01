import Image from 'next/image'
import LogosImg from './../../public/img/logos.webp'
export const Logos = () => {
  return (
    <div className="flex flex-row items-center gap-1">
      <Image
        src={LogosImg}
        alt="Evoke Labs & Heidi Health Logo"
        priority
        width={170}
      />
      <h1>
        Heidi Health
        <br />
        Voice Recorder
      </h1>
    </div>
  )
}
