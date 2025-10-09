import snapp from '../../src/snapp'
import { FeatureProjectContainer, FeatureProjectContainerRight } from "../components/Containers"
import Section from "../components/Section"
import Popup from './Popup'

const projectData = [
    {
        name: "Something one",
        icon: "/assets/snapp.webp",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum?"
    },
    {
        name: "Something two",
        icon: "/assets/snapp.webp",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum?"
    },
    {
        name: "Something three",
        icon: "/assets/snapp.webp",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum?"
    }
]

const FeactureProject = () => {

    const showPopup = snapp.dynamic(false)
    const popupInfo = snapp.dynamic({
        head: "Info",
        message: "This is good"
    });

    return (
        <Section id="Feature-project">
            <Popup showPopup={showPopup} popupInfo={popupInfo} />
            <h2 className="text-3xl font-bold my-4 text-slate-900 dark:text-gray-100 transition-colors duration-300">Featured Projects</h2>
            <div className="flex flex-col md:gap-y-4">
            {projectData.map((data, index) => (index % 2 === 0)
                ? <FeatureProjectContainer data={data} showPopup={showPopup} popupInfo={popupInfo} />
                : <FeatureProjectContainerRight data={data} showPopup={showPopup} popupInfo={popupInfo} />
            )}
            </div>
        </Section>
    )
}

export default FeactureProject