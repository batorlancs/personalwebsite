import React, { useEffect } from 'react';
import DownloadPic from '../../pic/download.svg';
import fileDownload from 'js-file-download';
import Pic from '../../pic/menu.svg';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

function Footer() {

    useEffect(() => {
        const storage = getStorage();
        getDownloadURL(ref(storage, 'other/GergelyBator_CV.pdf'))
            .then((url) => {
                document.getElementById('link')?.setAttribute('href', url);
            })
            .catch((error) => {
                console.log(error);
                console.log('anyad');
            });
    }, [])

    return (
        <div className= 'bg-black h-20 px-[10%] flex justify-center items-center'>
            <a id='link' href='' download='file' target='_blank' className='flex flex-row gap-2 justify-center items-center'>
                <img className='invert opacity-50 h-10 cursor-pointer max-lg:h-8 max-sm:h-6' src={DownloadPic}></img>
                <p className='text-white opacity-50 font-terminal text-xl max-lg:text-lg max-sm:text-sm'>download my curriculum vitae</p>
            </a>
        </div>
    )
}

export default Footer;