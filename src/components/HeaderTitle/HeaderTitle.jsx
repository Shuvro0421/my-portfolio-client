

const HeaderTitle = ({heading , white = false}) => {
    return (
        <div className="lg:mt-20 lg:mb-10 my-10">
            <h1 className={`md:text-4xl text-3xl text-center underline underline-offset-[12px] font-bold ${white === true ? 'text-white' : 'text-purple-500'} `}>{heading}</h1>
        </div>
    );
};

export default HeaderTitle;