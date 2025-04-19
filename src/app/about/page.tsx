export default function about() {
    return (
      <div className="grid grid-rows-[20px_1fr_auto] justify-items-center min-h-screen pb-20 gap-16 sm:p-20 mt-20 md:mt-0 font-[family-name:var(--font-ibm-plex-mono)]">
        <h1 className="text-[25px] md:text-6xl justify-center whitespace-nowrap font-bold">All about this website</h1>
        <main className="leading-loose">
          <p className="indent-15 text-justify ">
            this website was made by me using Next js as a framework and tailwind as a css to learn about 
            working of it and to inform about myself to anyone who 
            want to know me.I&#39;m still open to get your comment to develop website way better.Thank you
          </p>
          <h2 className="text-2xl font-bold mt-10">About me</h2>
          <p className="indent-15 text-justify">
            My name is Somchai P. Bento(Not actual real name).I&#39;m from the east of thailand.I graduated high school from trattrakarnkhun School(TK126) and will become collegian 
            in Computer Engineering at Kasetsart University Kamphaeng Saen Campus(KU85).I like to play with a circuit and microcontroller.Also fixing laptop and home appliance
            like a hobby (if family member ask me to fix that).I don&#39;t want public reveal for now.But you can follow my instragram <a target="_blank" href="https://www.instagram.com/bento_tpg/" className="text-blue-700">here</a>.
          </p>
        
        </main>
        
        <footer>
        <div className=" ">&copy;Free copyright under license, Hosted by Github.</div>
        </footer>
      </div>
    );
  }
  