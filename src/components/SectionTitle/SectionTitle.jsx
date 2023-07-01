const SectionTitle = ({title, subtitle}) => {
    return (
        <div className="text-white mt-14 mb-6">
            <h1 className="text-5xl font-bold">{title} <span className="text-yellow-600">{subtitle}</span></h1>
            <div className="bg-yellow-600 h-2 rounded-full my-4 w-2/12 inline-block"></div>
            <div className="bg-white h-2 w-2 rounded-full my-4 inline-block ml-2"></div>
            <div className="bg-yellow-600 h-2 w-2 rounded-full my-4 inline-block ml-2"></div>
            <div className="bg-white h-2 w-2 rounded-full my-4 inline-block ml-2"></div>
        </div>
    );
};

export default SectionTitle;