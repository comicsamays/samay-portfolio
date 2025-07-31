import projectOne from "../assets/diss-pic.png";
import projectTwo from "../assets/ar-image.jpg";
import projectThree from "../assets/heuristic-img.png";
import projectFour from "../assets/project-1.png";

const projects = {
    1: {
        title: "Dissertation",
        image: projectOne,
        description: (
            <>
                <p>
                    This project investigates how interaction modality—text, speech, or immersive virtual
reality—shapes user experience with large language model (LLM) chatbots. Inspired
by narrative and problem-solving scenarios, three tasks were designed and tested
across all modalities with 14 participants. Quantitative data (e.g., performance
metrics, NASA-TLX scores) and qualitative feedback were collected to evaluate
effectiveness, workload, and user preference. Results revealed a mismatch between
perceived and actual performance, with VR and speech outperforming text, despite
text being most preferred. The project offers a novel, mixed-methods approach to
evaluating LLMs in spatial environments and provides practical insights for designing
future human-AI systems across diverse interfaces.
                </p>
            </>
        ),
        github: "https://github.com",
        demo: "https://youtube.com",
        
    },

    2: {
        title: "Augmented Reality Platform to teach Quantum Computing",
        image: projectTwo,
        description: (
            <>
                <p>
                    For this project, I led a team to create an AR-based site in which users could learn quantum computing from. Our specification was an AR model which would be generated whenever a trigger image was detected by the phone camera, aswell as usage of TTS to provide information to the user about what they are looking at. We used THREE.js NODE.js and AR.js for this project as well as WATSON AI & TTS. I managed this project via Trello and agile style sprints. Our IBM sponsor was John MacNamara.
                </p>
            </>
        ),
        github: "https://github.com",
        demo: "https://youtube.com",
    },

    3: {
        title: "Selection Hyperheuristic for MIN-SET-COVER",
        image: projectThree,
        description: (
            <>
                <p>
                    For this project, I developed a Selection Hyperheuristic to solve a traditionally computationally heavy problem: the Minimum Set Cover Problem (MIN-SET-COVER). This NP-hard combinatorial optimisation problem involves selecting the smallest subset of sets such that their union covers all required elements. In a practical scenario, this can be framed as selecting the smallest team of programmers so that every necessary programming language is represented. For example, given developers with different language skills, the goal is to find the smallest group where all languages are covered. My solution intelligently chooses low-level heuristics during the search to efficiently find near-optimal covers, even as problem size scales.
                </p>
            </>
        ),
        github: "https://github.com",
        demo: "https://youtube.com",
    },

    4: {
        title: "To be Continued",
        image: projectFour,
        description: (
            <>
                <p>
                    I was going to put a lorem ipsum here but I thought that'd be a bit too lazy. How's your day been?
                </p>
            </>
        ),
        github: "https://github.com",
        demo: "https://youtube.com",
    },
};

export default projects