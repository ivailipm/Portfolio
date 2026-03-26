import { useState } from 'react'
import { createRoot } from 'react-dom/client'

const data = {
    hobbies: {
        left: [
            { icon: "📚", name: "Reading", year: "[Since 2015]" },
            { icon: "🎨", name: "Art", year: "[Since 2018]" },
            { icon: "📷", name: "Photography", year: "[Since 2021]" },
        ],
        right: [
            { title: "How I relieve stress", desc: "Enjoy working with different forms of art, including painting and clay modeling, as a way to explore ideas and express creativity." },
            { title: "Reading & Psychology", desc: "Interested in psychology and neuroplasticity, often reading classic works to better understand human behavior and cognition." },
            { title: "Photography & Visual Observation", desc: "Enjoy capturing moments and details from everyday life, using photography as a way to explore composition, light, and visual inspiration." },
        ],
    },
    interests: {
        left: [
            { icon: "💻", name: "Creative Development", year: "[Ongoing]" },
            { icon: "🎞", name: "Motion & Visual Design", year: "[Ongoing]" },
            { icon: "🧩", name: "Design Systems", year: "[Since 2019]" },
            { icon: "🧪", name: "Continuous Learning", year: "[Ongoing]" },
        ],
        right: [
            { title: "Web Development & Interactive UI", desc: "Interested in building interactive and visually engaging web experiences, combining development with modern UI/UX design." },
            { title: "Motion Graphics & Animations", desc: "Exploring motion design and animation to enhance storytelling and create more engaging digital interfaces." },
            { title: "Design Systems Thinking", desc: "Deeply interested in scalable component architecture and maintaining consistency across the product." },
            { title: "Creative Experimentation", desc: "Like experimenting with new creative tools and techniques, combining art, design, and technology." },
        ],
    },
    education: {
        left: [
            { icon: "🎓", name: "Thomas More", year: "[2024-2027]" },
            { icon: "🏫", name: "7th Highschool Seven Saints", year: "[2020-2024]" },
            { icon: "💡", name: "SoftUni", year: "[2021]" },
        ],
        right: [
            { title: "Bachelor of Applied Computer Science", desc: "Studying Applied Computer Science with focus on Application Development and AI." },
            { title: "HighSchool", desc: "Studied in language school learning English, Spanish and German and had strong focus on Mathematics and Physics in the last 2 years." },
            { title: "C# - SoftUni", desc: "Learnt data structures, OOP, generics, functional programming, Git, HTTP fundamentals and clean code principles through extensive hands-on exercises.", note: "⚠ Completed multiple graded exams and projects." },
        ],
    },
}

const TABS = [
    { key: "hobbies", label: "Hobbies" },
    { key: "interests", label: "Interests" },
    { key: "education", label: "Education" },
]

function MyStory() {
    const [active, setActive] = useState("education")
    const { left, right } = data[active]

    return (
        <div className="ms-section">
            <span className="ms-cross ms-cross-top">+</span>
            <span className="ms-cross ms-cross-bottom">+</span>

            {/* LEFT */}
            <div className="ms-left">
                <a href="/" className="ms-tag">
                    <div className="ms-tag-dot" />
                    My Story
                </a>
                <div className="ms-inst-list">
                    {left.map((item, i) => (
                        <div key={i} className="ms-inst-item">
                            <div className="ms-inst-icon">{item.icon}</div>
                            <div>
                                <div className="ms-inst-name">{item.name}</div>
                                <div className="ms-inst-year">{item.year}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT */}
            <div className="ms-right">
                <h2 className="ms-headline">
                    The Story Behind My<br />
                    Work and <span>the Experiences<br />That Shaped My Craft</span>
                </h2>

                <div className="ms-tabs">
                    {TABS.map((t) => (
                        <button
                            key={t.key}
                            className={`ms-tab${active === t.key ? ' active' : ''}`}
                            onClick={() => setActive(t.key)}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>

                <div className="ms-items">
                    {right.map((item, i) => (
                        <div key={i} className="ms-item">
                            <div className="ms-item-dot" />
                            <div>
                                <div className="ms-item-title">{item.title}</div>
                                <div className="ms-item-desc">{item.desc}</div>
                                {item.note && <div className="ms-item-note">{item.note}</div>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Mount only if element exists on this page
const storyEl = document.getElementById('story-root')
if (storyEl) {
    createRoot(storyEl).render(<MyStory />)
}