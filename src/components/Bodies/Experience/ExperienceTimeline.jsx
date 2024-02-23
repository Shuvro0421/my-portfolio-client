// Timeline.jsx
import React, { useEffect, useState } from "react";


import "./ExperienceTimeline.css";

const ExperienceTimeline = ({ image, datas, array }) => {
    const [timelineData, setTimelineData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const title4Data = datas;

                // Make sure the array length does not exceed the length of title4Data
                const arrayLength = Math.min(array, title4Data.length);

                // Slice the title4Data array to get the first 'arrayLength' items
                const slicedData = title4Data.slice(0, arrayLength);

                // Combine all items into an array
                const allItems = slicedData;

                // Sort the array by id instead of year
                const sortedTimelineData = allItems.sort((a, b) => b.id - a.id);

                setTimelineData(sortedTimelineData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching timeline data:", error);
            }
        };

        fetchData();
    }, [datas, array]);

    useEffect(() => {
        const boxes = document.querySelectorAll(".box");

        const displayContent = () => {
            const triggerBottom = (window.innerHeight / 5) * 4;

            boxes.forEach((box) => {
                const topBox = box.getBoundingClientRect().top;

                if (topBox < triggerBottom) {
                    box.classList.add("show");
                } else {
                    box.classList.remove("show");
                }
            });
        };

        window.addEventListener("scroll", displayContent);
        displayContent();

        return () => {
            window.removeEventListener("scroll", displayContent);
        };
    }, [timelineData]); // Add timelineData as a dependency

    if (loading) {
        return <p>Loading...</p>;
    }

    // Wrap the rendering logic in a setTimeout
    setTimeout(() => {
        // Your existing rendering logic here
    }, 0);

    return (
        <>
            <section
                id="timeline"
                className="bg-fixed overflow-hidden"
                style={{
                    backgroundImage: `url(${image})`,
                    
                }}
            >
                <ul>
                    {timelineData?.map((item, index) => (
                        <li key={index} className="relative">
                            <div className=" border-4 bg-white border-purple-500 w-9 h-9 absolute rounded-full -left-[13px]">
                                <img className="rounded-full" src={item?.image} alt="" />
                            </div>
                            <div className="box">
                                <h3 className="title">
                                    <span className="bg-white rounded-full text-black m-2 px-2 font-semibold">
                                        {item?.year}
                                    </span>
                                    {item?.title}
                                </h3>
                                <div className="px-2">
                                    <p className="text-xl">{item?.content} <br /> <span className="text-sm">{item?.duration} </span> <br /> <span className="text-xs">{item?.description} </span></p>
                                </div>

                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default ExperienceTimeline;
