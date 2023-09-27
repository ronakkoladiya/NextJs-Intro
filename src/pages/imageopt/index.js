import Header from "../../Components/Navbar/Navbar";
import Image from "next/image";

function ImageOptimization() {
    return(
        <>
            <Header/>
            <section>
                <h1 className={'text-[30px] font-bold text-center my-[20px]'}>Internal Image</h1>
                <Image src={'/img_1.jpg'} width={500} height={300} className={'mx-auto rounded-[20px]'}/>

                <h1 className={'text-[30px] font-bold text-center my-[20px]'}>External Image</h1>
                <Image src={'https://images.pexels.com/photos/12698435/pexels-photo-12698435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} width={500} height={300} className={'mx-auto rounded-[20px]'}/>
            </section>
        </>
    );
}

export default ImageOptimization;