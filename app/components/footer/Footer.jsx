import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="container lg:max-w-6xl mx-auto px-8 border-dashed border-t mt-16 border-[#00000040] lg:border-solid flex flex-col gap-y-9 lg:flex-row lg:justify-between">
        <div className="flex justify-between  lg:gap-x-24 pt-5 lg:pt-5 lg:pb-7">
          <div className="flex flex-col gap-2.5 lg:gap-2">
            <h5 className="text-2xl font-semibold mb-2 ">تورینو</h5>
            <span className="lg:text-lg">درباره ما</span>
            <span className="lg:text-lg">تماس با ما</span>
            <span className="lg:text-lg">چرا تورینو</span>
            <span className="lg:text-lg">بیمه مسافرتی</span>
          </div>
          <div className="flex flex-col gap-2.5 lg:gap-2">
            <h5 className="text-2xl font-semibold mb-2">خدمات مشتریان</h5>
            <span className="lg:text-lg">پشتیبانی آنلاین</span>
            <span className="lg:text-lg">راهنمای خرید</span>
            <span className="lg:text-lg">راهنمای استرداد</span>
            <span className="lg:text-lg">پرسش و پاسخ</span>
          </div>
        </div>

        <div className="flex justify-between items-center lg:flex-col-reverse lg:items-end lg:justify-around">
          <div className="flex gap-y-2 gap-x-4 flex-wrap w-1/4 lg:flex-row lg:w-fit justify-evenly">
            <div className="relative -z-10 w-9 h-10 lg:w-16 lg:h-20">
              <Image
                src="/images/img1.png"
                fill
                alt="aira Logo Validity....."
                className="z-0"
              />
            </div>
            <div className="relative -z-10 w-9 h-10 lg:w-16 lg:h-20">
              <Image
                src="/images/img2.png"
                fill
                alt="ecunion Logo Validity..."
                className="z-0"
              />
            </div>
            <div className="relative -z-10 w-8 h-10 lg:w-16 lg:h-20">
              <Image
                src="/images/img3.png"
                fill
                alt="passengers right Logo Validity"
                className="z-0"
              />
            </div>
            <div className="relative -z-10 w-8 h-10 lg:w-20 lg:h-20">
              <Image
                src="/images/img4.png"
                fill
                alt="samandehi Logo Validity"
                className="z-0"
              />
            </div>
            <div className="relative -z-10 w-10 h-9 lg:w-16 lg:h-20">
              <Image
                src="/images/img5.png"
                fill
                alt="state-airline Logo Validity"
                className="z-0"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-3 items-end">
            <div className="relative -z-10 w-24 h-8 lg:w-36 lg:h-11">
              <Image
                alt="Torino Logo"
                className="z-0"
                src="/images/logo.png"
                fill
              />
            </div>
            <div className="flex gap-x-1 items-center">
              <span className="text-sm lg:text-base">تلفن پشتیبانی:</span>
              <span className="text-sm lg:text-base">021-8574</span>
            </div>
          </div>
        </div>
        {/* Rights Reserved */}
      </div>

      <p className="text-xs font-light text-center py-2 lg:py-3 lg:text-base lg:font-medium broder border-t border-[#00000040] lg:border-[#00000033]">
        کلیه حقوق این وب سایت متعلق به
        <strong className="text-primary"> تورینو </strong>
        میباشد.
      </p>
    </>
  );
};

export default Footer;
