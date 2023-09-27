import React from "react";
import Link from "next/link";

function Header(){
    return(
        <>
            <div className={'text-center bg-gray-400'}>
                <Link href={'/'} className={'text-[34px] text-white cursor-pointer'}>NAVBAR</Link>
            </div>
        </>
    );
}

export default Header;