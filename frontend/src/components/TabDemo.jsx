

import obj from "../../data";
import { Tabs } from "./Tabs";

export function TabsDemo() {
    const tabs = [
        {
            title: "Product",
            value: "product",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Product Tab</p>
                    <img
                        src={obj.dashboard_ss}
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" />
                </div>
            ),
        },
        {
            title: "Services",
            value: "services",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Services tab</p>
                    <img
                        src={obj.dashboard_ss_1}
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" />
                </div>
            ),
        },
        {
            title: "Playground",
            value: "playground",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Playground tab</p>
                    <img
                        src={obj.dashboard_ss}
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" />
                </div>
            ),
        },
        {
            title: "Content",
            value: "content",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Content tab</p>
                    <img
                        src={obj.dashboard_ss_1}
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" />
                </div>
            ),
        },
        {
            title: "Random",
            value: "random",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Random tab</p>
                    <img
                        src={obj.dashboard_ss}
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" />
                </div>
            ),
        },
    ];

    return (
        <div
            className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start">
            <Tabs tabs={tabs} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <img
            src={obj.dashboard_ss}
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" />
    );
};
