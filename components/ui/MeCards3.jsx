import React from 'react'
import Image from 'next/image'

export default function MeCards3() {
  return (
    <section>
        <h3 className='text-white/50 text-sm uppercase font-bold'>Technologies i use</h3>
        <div className='flex flex-col space-y-6 mt-8'>
            <section>
                <h5 className='text-sm uppercase text-white/50 pb-2 mb-4 border-b border-white/5'>DEVELOPMENT</h5>
                <div className='grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2'>
                    <div className='card-base rounded-lg flex items-center space-x-4'>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#EFD81D" className="flex-shrink-0 h-5 w-5"><path d="M0 0v512h512V0H0zm274.286 397.714c0 49.84-29.44 74.137-72.057 74.137-38.492 0-60.835-19.931-72.172-43.988l39.177-23.714c7.555 13.405 13.292 24.742 29.783 24.742 13.714 0 24.983-6.182 24.983-30.24V237.714h50.286v160zm113.543 72.995c-44.675 0-73.543-20.16-87.635-48L339.429 400c10.285 16.846 23.714 28.069 47.428 28.069 19.932 0 31.509-8.823 31.509-22.572 0-16.491-11.92-22.331-33.92-32l-12.023-5.166c-34.72-14.765-57.737-33.325-57.737-72.514 0-36.08 27.485-62.434 70.445-62.434 30.595 0 52.572 9.508 68.4 37.348L416 294.857c-8.251-14.777-17.143-20.571-30.926-20.571-14.091 0-23.028 8.937-23.028 20.571 0 14.434 8.937 20.274 29.554 29.212l12.023 5.154c40.903 17.531 63.931 35.428 63.931 75.611.012 43.315-34.011 65.875-79.725 65.875z"></path></svg>
                        </div>
                        <span className='flex-1 truncate text-sm'>
                            JavaScript
                        </span>
                    </div>
                    <div className='card-base rounded-lg flex items-center space-x-4'>
                        <div className='rounded-lg flex'>
                            <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-5 w-5"><g fill="#61DAFB" width="25" height="25"><path d="M23.866 12.448c0-1.474-1.886-2.871-4.776-3.737.667-2.885.37-5.18-.936-5.915a2.065 2.065 0 00-1.038-.254v1.012c.213 0 .385.04.528.118.63.353.904 1.7.69 3.433-.05.426-.134.875-.236 1.334a22.89 22.89 0 00-2.941-.495 22.239 22.239 0 00-1.928-2.268c1.51-1.374 2.928-2.127 3.892-2.127V2.538c-1.274 0-2.942.889-4.628 2.43-1.686-1.532-3.354-2.412-4.628-2.412v1.011c.96 0 2.381.749 3.891 2.114a21.536 21.536 0 00-1.913 2.263 22.053 22.053 0 00-2.946.5 13.426 13.426 0 01-.24-1.316c-.219-1.733.05-3.08.676-3.438.138-.082.32-.118.532-.118V2.56a2.1 2.1 0 00-1.047.254c-1.301.734-1.593 3.025-.922 5.9-2.88.871-4.757 2.264-4.757 3.733 0 1.474 1.885 2.871 4.776 3.737-.667 2.885-.37 5.18.936 5.915.3.172.653.254 1.042.254 1.274 0 2.942-.89 4.628-2.431 1.686 1.533 3.354 2.412 4.627 2.412a2.1 2.1 0 001.047-.254c1.302-.734 1.594-3.025.922-5.9 2.872-.867 4.748-2.264 4.748-3.733zm-6.032-3.025a20.154 20.154 0 01-.625 1.791 24.54 24.54 0 00-1.274-2.15c.658.096 1.292.214 1.9.359zm-2.121 4.83a24.076 24.076 0 01-1.117 1.733 24.64 24.64 0 01-4.178.004 23.454 23.454 0 01-2.085-3.529 24.092 24.092 0 012.075-3.542 24.617 24.617 0 014.179-.004c.384.54.76 1.116 1.12 1.723.353.595.673 1.198.964 1.805a25.182 25.182 0 01-.958 1.81zm1.496-.59c.25.608.463 1.216.639 1.806a21.18 21.18 0 01-1.908.363 25.047 25.047 0 001.269-2.168zm-4.697 4.84c-.431-.436-.862-.92-1.288-1.451.417.018.843.031 1.274.031.435 0 .866-.009 1.287-.031-.417.53-.847 1.015-1.274 1.45zm-3.447-2.671a21.334 21.334 0 01-1.9-.359c.172-.585.385-1.188.626-1.791.19.362.39.725.607 1.088.218.363.44.717.667 1.062zm3.423-9.439c.431.435.862.92 1.288 1.451a29.29 29.29 0 00-1.274-.031c-.435 0-.866.009-1.288.031.417-.53.848-1.016 1.274-1.451zM9.06 9.064a24.949 24.949 0 00-1.269 2.164 19.156 19.156 0 01-.64-1.805c.608-.14 1.247-.263 1.91-.359zm-4.192 5.679c-1.64-.685-2.7-1.583-2.7-2.295s1.06-1.615 2.7-2.295a14.47 14.47 0 011.283-.458c.264.889.612 1.814 1.043 2.762a21.186 21.186 0 00-1.029 2.749c-.458-.141-.894-.295-1.297-.463zm2.492 6.481c-.63-.354-.903-1.7-.69-3.433.051-.427.134-.875.236-1.334.908.218 1.9.386 2.942.495a22.242 22.242 0 001.927 2.267c-1.51 1.375-2.928 2.128-3.891 2.128a1.125 1.125 0 01-.524-.123zm10.988-3.456c.218 1.733-.05 3.08-.676 3.438-.139.082-.32.118-.533.118-.959 0-2.38-.748-3.89-2.114a21.527 21.527 0 001.912-2.263 22.048 22.048 0 002.946-.499c.107.458.19.898.241 1.32zm1.784-3.025a14.44 14.44 0 01-1.283.458 21.491 21.491 0 00-1.043-2.762c.427-.944.77-1.864 1.029-2.749.458.141.894.295 1.301.463 1.64.685 2.701 1.583 2.701 2.295-.005.712-1.065 1.615-2.705 2.295z"></path> <path d="M12.498 14.52c1.169 0 2.117-.927 2.117-2.072s-.948-2.073-2.117-2.073c-1.17 0-2.117.928-2.117 2.073s.947 2.073 2.117 2.073z"></path></g></svg>
                        </div>
                        <span className='flex-1 truncate text-sm'>
                            React.js/Next.js
                        </span>
                    </div>
                    <div className='card-base rounded-lg flex items-center space-x-4'>
                        <div>
                        <Image src="/tailwinds.png" width={20} height={20} alt='anani sikeyim anani'></Image>
                        </div>
                        <span className='flex-1 truncate text-sm'>
                            tailwindcss
                        </span>
                    </div>
                    <div className='card-base rounded-lg flex items-center space-x-4'>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#6FA660" viewBox="0 0 512 512" className="flex-shrink-0 h-5 w-5"><path d="M429.76 130.07L274.33 36.85a37 37 0 00-36.65 0L82.24 130.06A38.2 38.2 0 0064 162.83V349a38.26 38.26 0 0018.24 32.8L123 406.14l.23.13c20.58 10.53 28.46 10.53 37.59 10.53 32.14 0 52.11-20.8 52.11-54.29V182a8.51 8.51 0 00-8.42-8.58h-22.38a8.51 8.51 0 00-8.42 8.58v180.51a15 15 0 01-6.85 13.07c-5.9 3.6-14.47 2.84-24.14-2.15l-39.06-23.51a1.1 1.1 0 01-.48-.92V165.46a1.32 1.32 0 01.59-1.06l151.84-93a.82.82 0 01.73 0l151.93 93a1.34 1.34 0 01.55 1.1V349a1.28 1.28 0 01-.45 1l-152.06 90.65a1.22 1.22 0 01-.8 0l-38.83-23.06a7.8 7.8 0 00-7.83-.41l-.34.2c-10.72 6.35-13.6 8-23.54 11.62-1.62.59-5.43 2-5.76 5.77s3.29 6.45 6.51 8.32l51.9 31.87a35.67 35.67 0 0018.3 5.07h.58a35.87 35.87 0 0017.83-5.07l155.43-93.13A38.37 38.37 0 00448 349V162.83a38.21 38.21 0 00-18.24-32.76z"></path> <path d="M307.88 318.05c-37.29 0-45.24-10.42-47.6-27.24a8.43 8.43 0 00-8.22-7.32h-19.8a8.44 8.44 0 00-8.26 8.58c0 14.58 5.12 62.17 83.92 62.17 24.38 0 44.66-5.7 58.63-16.49S388 311.26 388 292.55c0-37.55-24.5-47.83-72.75-54.55-49.05-6.82-49.05-10.29-49.05-17.89 0-5.47 0-18.28 35.46-18.28 25.23 0 38.74 3.19 43.06 20a8.35 8.35 0 008.06 6.67h19.87a8.24 8.24 0 006.16-2.86 8.91 8.91 0 002.12-6.44c-2.57-35.55-28.56-53.58-79.24-53.58-46.06 0-73.55 20.75-73.55 55.5 0 38.1 28.49 48.87 71.29 53.33 50 5.17 50 12.71 50 19.37.03 10.38-4.28 24.23-41.55 24.23z"></path></svg>
                        </div>
                        <span className='flex-1 truncate text-sm'>
                            Node.js
                        </span>
                    </div>
                    <div className='card-base rounded-lg flex items-center space-x-4'>
                        <div>
                            <div smart-image="true" className="h-5 w-5 flex-shrink-0" style={{backgroundImage: 'url("https://toasty.is-fi.re/32F8PHV.png")',backgroundPosition: 'center center',backgroundSize: 'cover', }}><img src="https://toasty.is-fi.re/32F8PHV.png" alt="image" loading="lazy" className="invisible"/></div>
                        </div>
                        <span className='flex-1 truncate text-sm'>
                            Java 
                        </span>
                    </div>
                    <div className='card-base rounded-lg flex items-center space-x-4'>
                        <div>
                            <div smart-image="true" className="h-5 w-5 flex-shrink-0"   style={{backgroundImage: 'url("https://toasty.is-fi.re/JKa6d7o.webp")',backgroundPosition: 'center center',backgroundSize: 'cover',}}><img src="https://toasty.is-fi.re/JKa6d7o.webp" alt="image" loading="lazy" className="invisible"/></div>
                        </div>
                        <span className='flex-1 truncate text-sm'>
                            Python
                        </span>
                    </div>
                </div>
            </section>
            <section>
                <h5 className='text-sm uppercase text-white/50 pb-2 mb-4 border-b border-white/5'>APPS</h5>
                <div className='grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2'>
                    <div className='card-base rounded-lg flex items-center space-x-4'>
                        <div className='rounded-lg flex'>
                            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-5 w-5"><path d="M7.25 19c1.794 0 3.25-1.344 3.25-3v-3H7.25c-1.793 0-3.249 1.344-3.249 3s1.456 3 3.25 3z" fill="#0ACF83"></path> <path d="M4.001 10c0-1.656 1.456-3 3.25-3H10.5v6H7.25c-1.793 0-3.249-1.344-3.249-3z" fill="#A259FF"></path> <path d="M4.002 4c0-1.656 1.455-3 3.249-3h3.25v6H7.25C5.457 7 4 5.656 4 4z" fill="#F24E1E"></path> <path d="M10.5 1h3.25c1.793 0 3.249 1.344 3.249 3s-1.456 3-3.25 3H10.5V1z" fill="#FF7262"></path> <path d="M16.999 10c0 1.656-1.456 3-3.25 3-1.793 0-3.249-1.344-3.249-3s1.456-3 3.25-3c1.793 0 3.249 1.344 3.249 3z" fill="#1ABCFE"></path></svg>
                        </div>
                        <span className='flex-1 truncate text-sm'>
                            Figma
                        </span>
                    </div>
                    <div className='card-base rounded-lg flex items-center space-x-4'>
                        <div className='rounded-lg flex'>
                            <img src="https://framerusercontent.com/images/TvJ9grdPgk3sRz6T6XwkpBrFr4k.png?scale-down-to=512" width={20} height={20} alt='anani sikeyim anani'></img>
                        </div>
                        <span className='flex-1 truncate text-sm'>
                            Framer
                        </span>
                    </div>
                    <div className='card-base rounded-lg flex items-center space-x-4'>
                        <div className='rounded-lg flex'>
                            <Image src="/burp.svg" width={20} height={20} alt='anani sikeyim anani'></Image>
                        </div>
                        <span className='flex-1 truncate text-sm'>Burp Suite</span>
                    </div>
                </div>
            </section>
        </div>
    </section>
  )
}
