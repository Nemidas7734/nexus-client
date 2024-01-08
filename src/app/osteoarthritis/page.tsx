import Image from "next/image"
export default function Home(){
    return(
        <div className="relative h-screen">
            <div className="container max-w-2xl absolute p-16 ml-16 z-10">
                <div className="bg-white p-6 min-w-96 min-h-64 shadow-lg rounded">
                    <h1 className="font-bold text-4xl text-balance mb-5 p-3">Osteoarthritis Research Center</h1>
                    <h1 className="text-2xl p-3">Tools, resources, and support for living well with osteoarthritis</h1>
                    {/* <div className=" ">
                    </div> */}
                </div>
            </div>
        <Image
          alt="Doctor with Xray"
          src='/images/Osteoarthritis.webp'
          quality={100}
          height={480}
          width={1600}
          sizes="100vw"
          style={{
            objectFit: 'cover',
            // height: 'calc(100vh - 96px)',
            width: '100vw',
          }}
        />
        
      </div>
    )
}