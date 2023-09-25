"use client"
import React from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/modal";
import { VscLocation } from 'react-icons/vsc';

type JobModalProps = {
    isOpen: boolean,
    onClose: () => void,
    handleOpen: () => void,
};

const JobModal:React.FC<JobModalProps> = ({isOpen, onClose, handleOpen}) => {

    return (
        <>
            <Modal
                size={"5xl"}
                isOpen={isOpen}
                placement={"top"}
                onClose={onClose}
                backdrop={"blur"}
                className='rounded-md mx-5 md:mx-10 !z-[999]'
            >
                <ModalContent>
                    <>
                        <ModalHeader >
                            <div className="flex flex-col gap-1">
                                <h1 className='text-primary text-2xl'>Popravka cevi sudopere u kuhinj na petom spratu</h1>
                                <p className='text-start text-md font-light text-gray-400 whitespace-nowrap'>Pre 345 dana</p>
                            </div>
                        </ModalHeader>
                        <ModalBody>
                            <h2 className='font-semibold text-lg'>Posao okačio</h2>
                            <div className='flex gap-4 items-center p-1.5'>
                                <img src='/avatar.png' alt='img' className='w-[50px] h-[50px]'></img>
                                <p>Lazar Vuksanovic</p>
                            </div>
                            <h2 className='font-semibold text-lg'>Opis posla</h2>
                            <p className='text-s indent-8 text-gray-600 p-1.5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nullam pulvinar risus non risus hendrerit venenatis.
                                Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nullam pulvinar risus non risus hendrerit venenatis.
                                Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nullam pulvinar risus non risus hendrerit venenatis.
                                Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nullam pulvinar risus non risus hendrerit venenatis.
                                Pellentesque sit amet hendrerit risus, sed porttitor quam.
                            </p>
                            <div className='flex gap-4 items-center w-fit'>
                                <div className='flex gap-2 items-center w-fit border-1 rounded-full px-2.5 py-1.5'>
                                    <VscLocation className="text-xl" />
                                    <p>Beograd | Savski venac</p>
                                </div>
                                <p className='w-fit border rounded-full px-2.5 py-1.5'>Online</p>
                            </div>

                            <h2 className='font-semibold text-lg'>Zarada</h2>
                            <span className='flex flex-col justify-center gap-2 p-1.5'>
                                <p>2000 - 2500 RSD</p>
                                <span className='flex gap-2'>
                                    <p>Napomena za plaćanje:</p>
                                    <p>Placa se po satu</p>
                                </span>
                            </span>
                            <h2 className='font-semibold text-lg'>Kategorije</h2>
                            <div className='flex gap-1 overflow-y-auto pb-2'>
                                <p className='tag'>Logo</p>
                                <p className='tag'>WordPress</p>
                                <p className='tag'>Website</p>
                                <p className='tag'>Privatni časovi</p>
                                <p className='tag'>UI/UX</p>
                                <p className='tag'>Logo</p>
                                <p className='tag'>WordPress</p>
                                <p className='tag'>Website</p>
                                <p className='tag'>Privatni časovi</p>
                                <p className='tag'>UI/UX</p>
                            </div>
                            <h2 className='font-semibold text-lg'>Prijavljeni frilenseri</h2>
                            <div className='flex flex-wrap gap-3 overflow-y-auto pb-2'>
                                <div className='flex gap-2 items-center p-2.5 border rounded-full'>
                                    <img src='/avatar.png' alt='img' className='w-[35px] h-[35px]'></img>
                                    <p>Lazar Vuksanovic</p>
                                </div>
                                <div className='flex gap-2 items-center p-2.5 border rounded-full'>
                                    <img src='/avatar.png' alt='img' className='w-[35px] h-[35px]'></img>
                                    <p>Lazar Cvijic</p>
                                </div>
                                <div className='flex gap-2 items-center p-2.5 border rounded-full'>
                                    <img src='/avatar.png' alt='img' className='w-[35px] h-[35px]'></img>
                                    <p>Milos Milosevic</p>
                                </div>
                                <div className='flex gap-2 items-center p-2.5 border rounded-full'>
                                    <img src='/avatar.png' alt='img' className='w-[35px] h-[35px]'></img>
                                    <p>Dragan Vladisavljevic</p>
                                </div>
                                <div className='flex gap-2 items-center p-2.5 border rounded-full'>
                                    <img src='/avatar.png' alt='img' className='w-[35px] h-[35px]'></img>
                                    <p>Andrija Pejcic</p>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button className='px-2 py-1 border-white rounded-md bg-primary text-white'>
                                Prijavi me za posao
                            </button>
                            <button onClick={onClose} className='px-2 py-1'>
                                Zatvori
                            </button>
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </>
    )
}
export default JobModal;