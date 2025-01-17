export default function About() {
    return(
        <div>
            <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                About me
            </h1>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
                I live in Texas.
            </p>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
                Cool stuff I think you should check out:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-800 dark:text-gray-200">
                <li>skill 1</li>
                <li>skill 2</li>
                <li>skill 3</li>
                <li>skill 4</li>
            </ul>

            <p className="text-gray-800 dark:text-gray-200">
            Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.
            </p>
        </div>
    )
}