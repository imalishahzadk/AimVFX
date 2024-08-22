// import React from 'react'
// import industry1 from '../../assets/Industry/bitcoin-icons_graph-filled.png'
// import industry2 from '../../assets/Industry/flowbite_microphone-solid.png'
// import industry3 from '../../assets/Industry/fluent-mdl2_health-solid.png'
// import industry4 from '../../assets/Industry/ic_baseline-house.png'
// import industry5 from '../../assets/Industry/material-symbols_travel-rounded.png'
// import industry6 from '../../assets/Industry/mdi_hanger.png'
// import industry7 from '../../assets/Industry/mingcute_pig-money-fill.png'
// import industry8 from '../../assets/Industry/teenyicons_book-solid.png'
// const stats = [
//     { id: 1, name: 'Business', value: industry1 },
//     { id: 2, name: 'real estate ',  value: industry2  },
//     { id: 3, name: 'coaching & education',  value: industry3 },
//     { id: 4, name: 'entertainment ',  value: industry4  },
//     { id: 5, name: 'health & wellness ',  value: industry5  },
//     { id: 6, name: 'lifestyle',  value: industry6  },
//     { id: 7, name: 'beauty & fashion',  value: industry7  },
//     { id: 7, name: 'finance',   value: industry8 },
//   ]
//   const bages = [
//     { id: 1, name: 'Business', value: industry1 },
//     { id: 2, name: 'real estate ',  value: industry2  },
//     { id: 3, name: 'coaching & education',  value: industry3 },
//     { id: 4, name: 'entertainment ',  value: industry4  },
//     { id: 5, name: 'health & wellness ',  value: industry5  },
//     { id: 6, name: 'lifestyle',  value: industry6  },
//     { id: 7, name: 'beauty & fashion',  value: industry7  },
//     { id: 8, name: 'finance',   value: industry8 },
//      { id: 9, name: 'Business', value: industry1 },
//     { id: 10, name: 'real estate ',  value: industry2  },
//     { id: 11, name: 'real estate ',  value: industry2  },
//     { id: 12, name: 'real estate ',  value: industry2  },
//     { id: 13, name: 'coaching & education',  value: industry3 },
//     { id: 14, name: 'entertainment ',  value: industry4  },
//     { id: 15, name: 'health & wellness ',  value: industry5  },
//     { id: 16, name: 'lifestyle',  value: industry6  },
//     { id: 17, name: 'beauty & fashion',  value: industry7  },
//     { id: 17, name: 'finance',   value: industry8 },
//   ]
// const WorkIndustry = () => {
//   return (
//     <div className=" py-24 sm:py-32">
//     <div className="mx-auto max-w-7xl px-6 lg:px-8">
//       <div className="mx-auto max-w-2xl lg:max-w-none">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
//           We work with your industry
//           </h2>
//           {/* <p className="mt-4 text-lg leading-8 text-white">
//             Lorem ipsum dolor sit amet consect adipisicing possimus.
//           </p> */}
//         </div>
//         <dl className="mt-16 grid grid-cols-1 gap-3 overflow-hidden  text-center sm:grid-cols-2 lg:grid-cols-8">
//           {stats.map((stat) => (
//             <div key={stat.id} className="flex flex-col gap-4 rounded-md border-white border items-center bg-gray-400/5 px-8 py-4">
//               <dt className="text-sm font-semibold leading-6 text-white"><img src={stat.value} className='h-6 w-6 object-cover'/></dt>
//               <dd className="text-xl font-semibold tracking-tight text-white">{stat.name}</dd>
//             </div>
//           ))}
//         </dl>
       
//         <div className="mt-16 flex flex-col sm:flex-row  gap-3   sm:text-center ">
//       <span className='w-40 text-white'>  All Filters:</span>
//          <div className='flex flex-wrap  items-center ju gap-3 overflow-hidden  text-center'> {bages.map((stat) => (
//             <div key={stat.id} className="flex flex-col gap-2 items-center ">
//              <span className="inline-flex items-center rounded-full  px-2 py-1.5 text-xs font-medium text-white ring-1 ring-inset ring-white">
//        { stat.name}
//       </span>
//             </div>
//           ))}</div>
//         </div>
//       </div>
//     </div>
//     <div className="bg-[#0B1A28] flex flex-row justify-center p-[0_3px_0_30px] w-[1920px] box-sizing-border">
//       <div className="relative flex flex-row p-[30px_0_0_0] w-[1887px] h-[1080px] box-sizing-border">
//         <div className="bg-[url('assets/images/HolographicFluidDropShapesIllustration02Copy2.png')] bg-[50%_50%] bg-cover bg-no-repeat rotate-[75deg] absolute right-[-77.1px] bottom-[-644.2px] w-[1668.2px] h-[1668.2px]">
//         </div>
//         <div className="bg-[url('assets/images/HolographicFluidDropShapesIllustration02Copy2.png')] bg-[50%_50%] bg-cover bg-no-repeat rotate-[-137.486deg] absolute left-[-262px] bottom-[-515.2px] w-[1906.2px] h-[1906.2px]">
//         </div>
//         <div className="opacity-[0.7] blur-[175px] bg-[url('assets/images/Copy2.png')] bg-[50%_50%] bg-cover bg-no-repeat rotate-[45.63deg] absolute left-[-1402px] top-[-1871px] w-[4233.8px] h-[4252.5px]">
//         </div>
//         <div className="opacity-40 blur-[250px] rounded-[700.1px] bg-[#15B8C7] rotate-[82.063deg] absolute right-[-466.1px] bottom-[-666.3px] w-[1580.1px] h-[1580.1px]">
//         </div>
//         <div className="opacity-30 blur-[250px] rounded-[378px] bg-[#312B8F] rotate-[82.063deg] absolute top-[-56px] right-[-329.2px] w-[853.2px] h-[853.2px]">
//         </div>
//         <img className="absolute right-[0px] bottom-[0px] w-[1340px] h-[1080px]" />
//         <div className="relative m-[0_27px_758px_0] w-[138px] h-[81px] box-sizing-border">
//           <div className="bg-[url('assets/images/ArrowIconLogoWith3DmodernStyleCopy7.png')] bg-[50%_50%] bg-cover bg-no-repeat relative w-[81px] h-[81px]">
//           </div>
//           <div className="absolute right-[0px] bottom-[15.5px] flex flex-col items-center box-sizing-border">
//             <img className="m-[0_0_4.8px_0] w-[73.7px] h-[28.9px]" />
//             <img className="m-[0_9.6px_0_12.3px] w-[51.8px] h-[8.7px]" />
//           </div>
//         </div>
//         <div className="backdrop-blur-[100px] rounded-[40px] border-[1px_solid_#FFFFFF] bg-[rgba(11,26,40,0.5)] relative m-[180px_0_0_0] flex flex-col items-center p-[69px_0_69px_0] w-[469px] h-[fit-content] box-sizing-border">
//           <div className="m-[0_73.1px_106px_0] flex flex-col w-[fit-content] box-sizing-border">
//             <div className="m-[0_19.8px_50px_0] inline-block break-words font-['Teko'] font-normal text-[50px] leading-[1.068] uppercase text-[#FFFFFF]">
//               Find your team
//             </div>
//             <div className="m-[0_0_50px_0] flex flex-col w-[fit-content] box-sizing-border">
//               <div className="m-[0_0_20px_0] inline-block self-start break-words font-['Rubik'] font-bold text-[16px] leading-[1.48] uppercase text-[#FFFFFF]">
//                 welcome to aim fx, user!
//               </div>
//               <div className="m-[0_0_20px_0] flex flex-row w-[fit-content] box-sizing-border">
//                 <div className="bg-[#FFFFFF] m-[11px_16px_12px_0] w-[30px] h-[1px]">
//                 </div>
//                 <span className="break-words font-['Rubik'] font-light text-[16px] leading-[1.48] text-[#FFFFFF]">
//                   Join your organization’s team
//                 </span>
//               </div>
//               <span className="m-[0_42.8px_0_0] self-center break-words font-['Rubik'] font-light text-[16px] leading-[1.48] text-[#A5A5A5]">
//                 Create new team
//               </span>
//             </div>
//             <span className="self-start break-words font-['Rubik'] font-light text-[16px] leading-[1.48] text-[#FFFFFF]">
//               Lorem ipsum dolor sit amet consectetur. Malesuada interdum tellus viverra ut nulla placerat tincidunt velit scelerisque. 
//             </span>
//           </div>
//           <span className="m-[0_0_0_210px] break-words font-['Rubik'] font-light text-[20px] underline leading-[1.48] text-[#00FFFF]">
//             Skip this step
//           </span>
//         </div>
//         <div className="absolute top-[50%] right-[155px] translate-y-[-50%] flex flex-col box-sizing-border">
//           <span className="self-start break-words font-['Teko'] font-normal text-[50px] leading-[1.068] uppercase text-[#FFFFFF]">
//             Organizations Teams
//           </span>
//           <div className="m-[0_0_38px_0] inline-block self-start break-words font-['Rubik'] font-bold text-[16px] leading-[1.48] uppercase text-[#FFFFFF]">
//             for user@mail.com
//           </div>
//           <div className="backdrop-blur-[12.5px] rounded-[20px] border-[10px_solid_#00FFFF] bg-[rgba(255,255,255,0.2)] relative m-[0_0_24px_0] flex flex-row justify-between p-[31px_15px_15px_50px] w-[702px] box-sizing-border">
//             <div className="m-[0_0_16px_0] flex flex-row box-sizing-border">
//               <div className="rounded-[44px] bg-[#0B1A28] relative m-[0_18px_0_0] flex flex-row justify-center p-[22px_0.6px_22px_0] w-[88px] box-sizing-border">
//                 <span className="break-words font-['Rubik'] font-light text-[30px] leading-[1.48] text-[#FFFFFF]">
//                   LT
//                 </span>
//               </div>
//               <div className="m-[8px_0_3px_0] flex flex-col box-sizing-border">
//                 <span className="self-start break-words font-['Teko'] font-normal text-[50px] leading-[1.068] uppercase text-[#FFFFFF]">
//                   Lola
//                 </span>
//                 <span className="break-words font-['Rubik'] font-bold text-[16px] leading-[1.48] uppercase text-[#FFFFFF]">
//                   Lola Tinikashvili
//                 </span>
//               </div>
//             </div>
//             <div className="rounded-[100px] bg-[linear-gradient(101.38deg,#2EABAF_4.7%,#15B8C7_98%)] relative m-[54px_0_0_0] flex flex-row justify-center p-[16px_0_15px_0] w-[186px] h-[fit-content] box-sizing-border">
//               <span className="break-words font-['Rubik'] font-medium text-[16px] uppercase text-[#FFFFFF]">
//                 Request to Join
//               </span>
//             </div>
//           </div>
//           <div className="backdrop-blur-[12.5px] rounded-[20px] border-[1px_solid_#FFFFFF] bg-[rgba(255,255,255,0.2)] relative m-[0_0_24px_0] flex flex-row justify-between p-[31px_15px_15px_50px] w-[702px] box-sizing-border">
//             <div className="m-[0_0_16px_0] flex flex-row box-sizing-border">
//               <div className="rounded-[44px] bg-[#3F6B93] relative m-[0_18px_0_0] flex flex-row justify-center p-[22px_0.6px_22px_0] w-[88px] box-sizing-border">
//                 <span className="break-words font-['Rubik'] font-light text-[30px] leading-[1.48] text-[#FFFFFF]">
//                   LT
//                 </span>
//               </div>
//               <div className="m-[6px_0_5px_0] flex flex-col box-sizing-border">
//                 <span className="self-start break-words font-['Teko'] font-normal text-[50px] leading-[1.068] uppercase text-[#FFFFFF]">
//                   Lola
//                 </span>
//                 <span className="break-words font-['Rubik'] font-bold text-[16px] leading-[1.48] uppercase text-[#FFFFFF]">
//                   Lola Tinikashvili
//                 </span>
//               </div>
//             </div>
//             <div className="rounded-[100px] bg-[linear-gradient(101.38deg,#2EABAF_4.7%,#15B8C7_98%)] relative m-[54px_0_0_0] flex flex-row justify-center p-[16px_0_15px_0] w-[186px] h-[fit-content] box-sizing-border">
//               <span className="break-words font-['Rubik'] font-medium text-[16px] uppercase text-[#FFFFFF]">
//                 Request to Join
//               </span>
//             </div>
//           </div>
//           <div className="backdrop-blur-[12.5px] rounded-[20px] border-[1px_solid_#FFFFFF] bg-[rgba(255,255,255,0.2)] relative flex flex-row justify-between p-[31px_15px_15px_50px] w-[702px] box-sizing-border">
//             <div className="m-[0_0_16px_0] flex flex-row box-sizing-border">
//               <div className="rounded-[44px] bg-[#7C6296] relative m-[0_18px_0_0] flex flex-row justify-center p-[22px_0.6px_22px_0] w-[88px] box-sizing-border">
//                 <span className="break-words font-['Rubik'] font-light text-[30px] leading-[1.48] text-[#FFFFFF]">
//                   LT
//                 </span>
//               </div>
//               <div className="m-[6px_0_5px_0] flex flex-col box-sizing-border">
//                 <span className="self-start break-words font-['Teko'] font-normal text-[50px] leading-[1.068] uppercase text-[#FFFFFF]">
//                   Lola
//                 </span>
//                 <span className="break-words font-['Rubik'] font-bold text-[16px] leading-[1.48] uppercase text-[#FFFFFF]">
//                   Lola Tinikashvili
//                 </span>
//               </div>
//             </div>
//             <div className="rounded-[100px] bg-[linear-gradient(101.38deg,#2EABAF_4.7%,#15B8C7_98%)] relative m-[54px_0_0_0] flex flex-row justify-center p-[16px_0_15px_0] w-[186px] h-[fit-content] box-sizing-border">
//               <span className="break-words font-['Rubik'] font-medium text-[16px] uppercase text-[#FFFFFF]">
//                 Request to Join
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="rounded-[100px] bg-[linear-gradient(101.38deg,#2EABAF_4.7%,#15B8C7_98%)] absolute top-[40px] right-[40px] flex flex-row justify-center p-[16px_15.2px_15px_14.2px] box-sizing-border">
//           <span className="break-words font-['Rubik'] font-medium text-[16px] uppercase text-[#FFFFFF]">
//             AF
//           </span>
//         </div>
//         <div className="shadow-[0px_2px_19px_0px_rgba(0,0,0,0.08)] rounded-[100px] border-[3px_solid_#FFFFFF] absolute top-[47px] right-[110px] flex flex-row justify-center p-[8px_13.5px_9px_13.5px] box-sizing-border">
//           <span className="break-words font-['Rubik'] font-medium text-[16px] uppercase text-[#FFFFFF]">
//             ?
//           </span>
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default WorkIndustry