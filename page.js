import Head from 'next/head'

// Home component
const Home = () => {
  return (
    <>
      <Head>
        <title>Your Search Engine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Make the Navbar fixed */}
      <header class="fixed top-0 left-0 right-0  z-50 text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Chatbot</span>
          </a>
          <nav class="md:ml-auto md:mr-auto  flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">Me</a>
            <a class="mr-5  hover:text-gray-900">Second Link</a>
          </nav>
          <button class="inline-flex  items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      <div class="h-24"></div>
      <div className="h-1"></div>
      <div className="box">


        <aside className='sidemenu'>
          <div className="side-menu-button">
            <span className='text-xl'>+</span> New chat
          </div>
        </aside>
        <section className='chatbox'>
          {/* chat area  */}

          <div className="chat-log">
            <div className="chat-message">
              <div className="chat-message-center">

              <div className="avatar">
                
              </div>
              <div className="message">
                Hello
              </div>
              </div>
            </div>
            <div className="chat-message chatgpt">
              <div className="chat-message-center">

              <div className="avatar chatgpt">
                
              </div>
              <div className="message">
                Hello I am AI
              </div>
              </div>
            </div>
          </div>


          {/* input area  */}
          <div className="chat-input-holder">
            <textarea name="" id=""
              className='chat-input-textarea' placeholder='Type Your text'>

            </textarea>
            <div className="below-input">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, nam?
            </div>
          </div>

        </section>

      </div>

    </>
  )
}

export default Home
