export default function About() {
    return(
        <div>
            <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                About
            </h1>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum ipsam sunt excepturi repellat earum, aperiam dolorum alias dicta magni, placeat minus unde ipsa inventore, quasi tenetur! Tempora earum consequatur vitae.
            </p>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
                My skills include:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-800 dark:text-gray-200">
                <li>skill 1</li>
                <li>skill 2</li>
                <li>skill 3</li>
                <li>skill 4</li>
            </ul>
            <p className="text-gray-800 dark:text-gray-200">
                When I'm not coding I am reading.
            </p>
        </div>
    )
}