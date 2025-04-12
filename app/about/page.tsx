export default function About() {
    return(
        <div>
            <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                About me
            </h1>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
                I was born in Vietnam and moved to Texas when I was 3 years old, where I have lived ever since. I enjoy full stack development with an emphasis on backend systems, specifically APIs and server architecture. 
                In my spare time, I enjoy reading (favorite genres: fantasy, theology, philosophy) and bouldering (currently V5-V6 on the American V-scale). I am also hopelessly addicted to the video game known as League of Legends
            </p>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
                Interesting stuff I think you should check out:
            </p>
            <ul className="underline list-disc list-inside mb-4 text-gray-800 dark:text-gray-200">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
            </ul>

            <div className="flex items-center justify-center min-h-[50vh]">
                <h2 className="text-center max-w-2xl text-3xl font-bold text-gray-900 dark:text-gray-100 italic">
                    "Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover."
                </h2>
            </div>
        </div>
    )
}