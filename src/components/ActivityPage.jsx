import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ActivityPage.css";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const ActivityPage = (props) => {
    const [progressData, setProgressData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [month, toggleMonth] = useState(false)
    const [week, toggleWeek] = useState(false);
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);


    console.log(progressData);

    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const subscriptions = 13; //based on monthly subscriptions, change number accordingly to show tables
                const numYears = Math.floor(subscriptions / 12) + 1;
                const numMonthsInLastYear = subscriptions % 12; //(1%12 = 1)
                console.log(subscriptions);

                // Function to generate an empty week's data
                const createEmptyWeekData = (weekNumber) => {
                    return {
                        weekNumber: weekNumber,
                        activities: Array.from({ length: 5 }, () =>
                            Array.from({ length: 7 }, (_, dayIndex) => ({
                                day: dayIndex + 1, //day value set here (1 to 7)
                                trials: Array(2).fill("none"),
                            }))
                        ),
                    };
                };

                // Function to generate an empty month's data
                const createEmptyMonthData = (monthNumber) => {
                    return {
                        monthNumber: monthNumber,
                        weeks: [
                            createEmptyWeekData(1),
                            createEmptyWeekData(2),
                            createEmptyWeekData(3),
                            createEmptyWeekData(4),
                        ],
                    };
                };

                const createEmptyYearData = (year, numMonths) => {
                    return {
                        year: year,
                        months: Array.from({ length: numMonths }, (_, monthIndex) =>
                            createEmptyMonthData(monthIndex + 1)
                        ),
                    };
                };

                const emptyProgressData = Array.from(
                    { length: numYears },
                    (_, yearIndex) => createEmptyYearData(yearIndex + 1, 12)
                );

                // Add the remaining months to the last year if needed
                if (numMonthsInLastYear > 0) {
                    const lastYearIndex = emptyProgressData.length - 1;
                    emptyProgressData[lastYearIndex].months.splice(numMonthsInLastYear); //removes extra months, say I have 5 subscriptions, 5%12=5, so spilce at 5, leaving array of 0 to 4 months

                    // If the last year has no months, remove it from the progress data
                    if (emptyProgressData[lastYearIndex].months.length === 0) {
                        emptyProgressData.pop();
                    }
                }

                setProgressData(emptyProgressData);

                setLoading(false);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        fetchPatient();
    }, []);

    const handleCellChange = (
        yearIndex,
        monthIndex,
        weekIndex,
        dayIndex,
        activityIndex,
        trial,
        newValue
    ) => {
        setProgressData((prevProgressData) => {
            const updatedProgressData = [...prevProgressData];
            // const yearIndex = year - 1;
            // const monthIndex = monthNumber - 1;
            // const weekIndex = weekNumber - 1;
            updatedProgressData[yearIndex].months[monthIndex].weeks[
                weekIndex
            ].activities[activityIndex][dayIndex].trials[trial] = newValue;

            return updatedProgressData;
        });
    };

    if (loading) {

        return <p>Loading...</p>
    }


    return (
        <Accordion transition={{ duration: "100ms", timingFunction: "cubic-bezier(0, 0, 0.2, 1)" }} className="accordian col-xs-12">
            {progressData.map((yearData, yearIndex) => (
                <AccordionItem className="w-full year col-xs-12" key={`year_${yearData.year}`}>
                    {({ open }) => (
                        <>
                            <AccordionHeader className="button col-xs-12">
                                <h4 className={`accordion-title ${open ? 'accordion-active' : ''}`} >Year {yearData.year} </h4>
                                <KeyboardArrowDownIcon />
                            </AccordionHeader>
                            <AccordionBody>
                                {yearData.months.map((monthData, monthIndex) => (
                                    <AccordionItem className="month accordion-body col-xs-12" key={`month_${yearData.year}_${monthIndex}`}>
                                        {({ open2 }) => (
                                            <>
                                                <AccordionHeader className="button button-level2 col-xs-12">
                                                    <h5 className={`accordion-title ${open2 ? 'accordion-active' : ''}`} >Month {monthData.monthNumber} </h5>
                                                    <KeyboardArrowDownIcon />
                                                </AccordionHeader>
                                                <AccordionBody>
                                                    {monthData.weeks.map((weekData, weekIndex) => (

                                                        <AccordionItem className="week accordion-body" key={`week_${monthIndex}_${weekIndex}`}>
                                                            {({ open3 }) => (
                                                                <>
                                                                    <AccordionHeader className="button button-level3">
                                                                        <h6 className={`accordion-title ${open3 ? 'accordion-active' : ''}`} >Week  {weekData.weekNumber} </h6>
                                                                        <KeyboardArrowDownIcon />
                                                                    </AccordionHeader>
                                                                    <AccordionBody >
                                                                        <div className="activity-content">
                                                                            <h5>Session By :</h5>
                                                                            {props.who === "therepist" ?
                                                                                <p>Dr. Abhinav sharma</p> :
                                                                                <input type="text" />
                                                                            }<br /><br />
                                                                            <button className="sessionRecordingBtn">Session Recording</button>
                                                                            <div className="tipsDiv">
                                                                                <h5>Three tips for dialy routine</h5>
                                                                                {props.who === "therepist" ? <ul>
                                                                                    <li>Lorem ipsum dolor sit amet.</li>
                                                                                    <li>Lorem ipsum dolor sit amet.</li>
                                                                                    <li>Lorem ipsum dolor sit amet.</li>
                                                                                </ul> :
                                                                                    <>
                                                                                    <div className="row mt-3 mb-3">
                                                                                            <div className="col-md-12"><label className="labels"  style={{fontSize:"15px"}}>Tip 1</label><input type="text" className="form-control" placeholder="06" value="" /></div>
                                                                                            <div className="col-md-12"><label className="labels"  style={{fontSize:"15px"}}>Tip 2</label><input type="text" className="form-control" placeholder="English" value="" /></div>
                                                                                            <div className="col-md-12"><label className="labels"  style={{fontSize:"15px"}}>Tip 3</label><input type="text" className="form-control" placeholder="9988XXXXXX" value="" /></div>
                                                                                    </div>
                                                                                    <h5>Assign Activities</h5>
                                                                                        <div className="row mt-3 mb-3">
                                                                                            <div className="col-md-12"><label className="labels" style={{fontSize:"15px"}}>Activity 1</label><input type="text" className="form-control" placeholder="activity" value="" /></div>
                                                                                            <div className="col-md-12"><label className="labels" style={{fontSize:"15px"}}>Activity 2</label><input type="text" className="form-control" placeholder="activity" value="" /></div>
                                                                                            <div className="col-md-12"><label className="labels" style={{fontSize:"15px"}}>Activity 3</label><input type="text" className="form-control" placeholder="activity" value="" /></div>
                                                                                            <div className="col-md-12"><label className="labels" style={{fontSize:"15px"}}>Activity 4</label><input type="text" className="form-control" placeholder="activity" value="" /></div>
                                                                                            <div className="col-md-12"><label className="labels" style={{fontSize:"15px"}}>Activity 5</label><input type="text" className="form-control" placeholder="activity" value="" /></div>
                                                                                        </div>
                                                                                        {/* <div className="row"> */}
                                                                                            <button type="button" className="btn btn-success">Update</button>
                                                                                        {/* </div> */}
                                                                                    </>
                                                                                }
                                                                            </div>
                                                                            <table>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th rowSpan="2">Activity</th>
                                                                                        <th colSpan="2" className="day">Day 1</th>
                                                                                        <th colSpan="2" className="day">Day 2</th>
                                                                                        <th colSpan="2" className="day">Day 3</th>
                                                                                        <th colSpan="2" className="day">Day 4</th>
                                                                                        <th colSpan="2" className="day">Day 5</th>
                                                                                        <th colSpan="2" className="day">Day 6</th>
                                                                                        <th colSpan="2" className="day">Day 7</th>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th className="trial1">T 1</th>
                                                                                        <th className="trial2">T 2</th>
                                                                                        <th className="trial1">T 1</th>
                                                                                        <th className="trial2">T 2</th>
                                                                                        <th className="trial1">T 1</th>
                                                                                        <th className="trial2">T 2</th>
                                                                                        <th className="trial1">T 1</th>
                                                                                        <th className="trial2">T 2</th>
                                                                                        <th className="trial1">T 1</th>
                                                                                        <th className="trial2">T 2</th>
                                                                                        <th className="trial1">T 1</th>
                                                                                        <th className="trial2">T 2</th>
                                                                                        <th className="trial1">T 1</th>
                                                                                        <th className="trial2">T 2</th>

                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    {weekData.activities.map(
                                                                                        (activityData, activityIndex) => (
                                                                                            <tr
                                                                                                key={`activity_${monthIndex}_${weekIndex}_${activityIndex}`}
                                                                                            >
                                                                                                <td className="activity">{`Activity ${activityIndex + 1}`}</td>
                                                                                                {activityData.map((dayData, dayIndex) => (
                                                                                                    <React.Fragment
                                                                                                        key={`activity_${monthIndex}_${weekIndex}_${activityIndex}_day_${dayIndex}`}
                                                                                                    >
                                                                                                        {/* FOR TRIAL ONE */}
                                                                                                        <td
                                                                                                            key={`activity_${monthIndex}_${weekIndex}_${activityIndex}_day_${dayIndex}_trial_0`}
                                                                                                        >
                                                                                                            <select style={{ outline: "none" }}
                                                                                                                value={dayData.trials[0]}
                                                                                                                onChange={(e) =>
                                                                                                                    handleCellChange(
                                                                                                                        yearIndex,
                                                                                                                        monthIndex,
                                                                                                                        weekIndex,
                                                                                                                        // monthData.monthNumber,
                                                                                                                        // weekData.weekNumber,
                                                                                                                        dayIndex,
                                                                                                                        activityIndex,
                                                                                                                        0, // Use 0 for the first trial
                                                                                                                        e.target.value
                                                                                                                    )
                                                                                                                }
                                                                                                            >
                                                                                                                <option value="none" disabled hidden>
                                                                                                                    -
                                                                                                                </option>
                                                                                                                <option value="not attempted">NA</option>
                                                                                                                <option style={{ color: "red" }} value="attempted">A</option>
                                                                                                                <option style={{ color: "green" }} value="success">S</option>
                                                                                                            </select>
                                                                                                        </td>
                                                                                                        {/* FOR TRIAL TWO */}
                                                                                                        <td
                                                                                                            key={`activity_${monthIndex}_${weekIndex}_${activityIndex}_day_${dayIndex}_trial_1`}
                                                                                                        >
                                                                                                            <select style={{ outline: "none" }}
                                                                                                                value={dayData.trials[1]}
                                                                                                                onChange={(e) =>
                                                                                                                    handleCellChange(
                                                                                                                        yearIndex,
                                                                                                                        monthIndex,
                                                                                                                        weekIndex,
                                                                                                                        // monthData.monthNumber,
                                                                                                                        // weekData.weekNumber,
                                                                                                                        dayIndex,
                                                                                                                        activityIndex,
                                                                                                                        1, // Use 1 for the second trial
                                                                                                                        e.target.value
                                                                                                                    )
                                                                                                                }
                                                                                                            >
                                                                                                                <option value="none" disabled hidden>
                                                                                                                    -
                                                                                                                </option>
                                                                                                                <option value="not attempted">NA</option>
                                                                                                                <option style={{ color: "red" }} value="attempted">A</option>
                                                                                                                <option style={{ color: "green" }} value="success">S</option>
                                                                                                            </select>
                                                                                                        </td>
                                                                                                        {/* ))} */}
                                                                                                    </React.Fragment>
                                                                                                ))}
                                                                                                {props.who === "therepist" ?

                                                                                                    <Link
                                                                                                        onClick={() =>
                                                                                                            console.log(
                                                                                                                yearIndex,
                                                                                                                monthIndex,
                                                                                                                weekIndex,
                                                                                                                activityIndex
                                                                                                            )
                                                                                                        }
                                                                                                    >
                                                                                                        Instructions
                                                                                                    </Link> : <input type="file" />}
                                                                                            </tr>
                                                                                        )
                                                                                    )}
                                                                                </tbody>
                                                                            </table>
                                                                            <div className="uploadVideoDiv">
                                                                                {props.who === "therepist" ?
                                                                                    <div>
                                                                                        <h5>Upload Video <span> *(On Day 3) </span></h5>
                                                                                        <input type="file" />
                                                                                        <div style={{ marginTop: "15px" }}>
                                                                                            <h6 style={{ fontWeight: "bold" }}>Therapist Review</h6>
                                                                                            <p> lorem ipsum it's a feedback by therepist lorem ipsum it's a feedback by therepist</p>
                                                                                        </div>
                                                                                    </div> :
                                                                                    <div>
                                                                                        <h5>Uploaded Video by patient <span> *(On Day 3) </span></h5>
                                                                                        <button className="btn btn-success">View Video</button>
                                                                                        <div style={{ marginTop: "15px" }}>
                                                                                            <h6 style={{ fontWeight: "bold" }}>Therapist Review</h6>
                                                                                            <textarea style={{ width: "98%", height: "100px", padding: "10px 15px" }}></textarea>                                                                                    </div>


                                                                                    </div>
                                                                                }


                                                                            </div>
                                                                        </div>
                                                                    </AccordionBody>
                                                                </>

                                                            )}
                                                        </AccordionItem>
                                                    ))}
                                                </AccordionBody>
                                            </>
                                        )}
                                    </AccordionItem>
                                ))}
                            </AccordionBody>
                        </>
                    )}
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default ActivityPage;