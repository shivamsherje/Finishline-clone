import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    
} from '@chakra-ui/react'
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosSearch } from 'react-icons/io';
import { BsPersonCircle } from 'react-icons/bs';
import { BsBag } from 'react-icons/bs';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom';

export default function NavHamburger() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <div className='Hamburger-box'>
            <div className='hamburger-nav'>
                <Button ref={btnRef} bg="unset" onClick={onOpen}>
                    <RxHamburgerMenu fontSize="40px" />
                </Button>
                <IoIosSearch fontSize="40px" />
                <img src={logo} alt="" className='hamburger-log' />
                <BsPersonCircle fontSize="35px" />
                <BsBag fontSize="35px" />
            </div>
            <Drawer
                isOpen={isOpen}
                placement='left'
                size='full'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton size='lg' />
                    <DrawerHeader textAlign="center" borderBottom="1px solid  rgb(191, 190, 190)">CATEGORIES</DrawerHeader>

                    <DrawerBody>
                        <Link to='/newarrival' className="hamburger-catagories-box" >
                            <img src="https://media.finishline.com/s/finishline/FD0664_400?$Main$&$global_access_grid$&layer0=[h=245&w=245&bg=rgb(237,237,237)]&h=245&w=245&fmt=webp" alt="" />
                            <p>New Arrivals</p>
                            <MdOutlineArrowForwardIos />
                        </Link>
                        <Link className="hamburger-catagories-box">
                            <img src="https://media.finishline.com/s/finishline/DM1123_100?$Small$&fmt=webp" alt="" />
                            <p>Men</p>
                            <MdOutlineArrowForwardIos />
                        </Link>
                        <Link className="hamburger-catagories-box">
                            <img src="https://media.finishline.com/s/finishline/IG9653_624?$Small$&fmt=webp" alt="" />
                            <p>Women</p>
                            <MdOutlineArrowForwardIos />
                        </Link>
                        <Link className="hamburger-catagories-box">
                            <img src="https://finishline.a.bigcontent.io/v1/static/FNL_121522_Nike_Zoom_Freak_4_Kids_Basketball__Basketball_LP_Tile_604x604?fmt=webp" alt="" />
                            <p>Boys</p>
                            <MdOutlineArrowForwardIos />
                        </Link>
                        <Link className="hamburger-catagories-box">
                            <img src="https://media.finishline.com/s/finishline/36K157_A0S?$Small$&fmt=webp" alt="" />
                            <p>Girls</p>
                            <MdOutlineArrowForwardIos />
                        </Link>
                        <Link className="hamburger-catagories-box">
                            <img src="https://media.finishline.com/s/finishline/DV2333_100?$Main_onModel$&$global_access_grid$&layer0=[h=245&w=245&bg=rgb(237,237,237)]&h=245&w=245&fmt=webp" alt="" />
                            <p>Clothing</p>
                            <MdOutlineArrowForwardIos />
                        </Link>
                        <Link className="hamburger-catagories-box">
                            <img src="https://media.finishline.com/s/finishline/SX6897_903?$Main$&layer0=[h=245&w=245&bg=rgb(237,237,237)]&h=245&w=245&fmt=webp" alt="" />
                            <p>Accessories</p>
                            <MdOutlineArrowForwardIos />
                        </Link>
                        <Link className="hamburger-catagories-box">
                            <img src="https://media.finishline.com/s/finishline/CJ2242_621?$Main_onModel$&layer0=[h=245&w=245&bg=rgb(237,237,237)]&h=245&w=245&fmt=webp" alt="" />
                            <p>Sales</p>
                            <MdOutlineArrowForwardIos />
                        </Link>
                        <button className='hamburger-catagories-brand'>
                            Brands
                            <MdOutlineArrowForwardIos />
                        </button><br />
                        <div className='hamburger-catagories-release '>
                            Releases
                        </div>
                    </DrawerBody>


                    <Button variant='outline' mr={3} onClick={onClose}>
                        Cancel
                    </Button>

                </DrawerContent>
            </Drawer>
        </div>
    )
}
