import React, { useState } from "react";
import { Box, Button, Card, CardContent, Typography, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import quizData from "./questions.js";

function App() {
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);
    const [selectedExam, setSelectedExam] = useState(1); // mặc định Đề 1

    const handleChange = (qIndex, value) => {
        setAnswers({ ...answers, [qIndex]: value });
    };

    const handleSubmit = () => {
        let newScore = 0;
        visibleQuestions.forEach((q, index) => {
            const globalIndex = (selectedExam - 1) * 30 + index;
            if (answers[globalIndex] === q.answer) newScore++;
        });
        setScore(newScore);
    };

    // Cắt dữ liệu theo đề
    const startIndex = (selectedExam - 1) * 30;
    const endIndex = startIndex + 30;
    const visibleQuestions = quizData.slice(startIndex, endIndex);

    return (
        <Box
            sx={{
                m: 0,
                width: "100vw",
                fontFamily: "Arial, sans-serif",
                display: "flex",
                bgcolor: "#F6F8FA",
                minHeight: "100vh",
            }}
        >
            {/* Sidebar */}
            <Box
                sx={{
                    bgcolor: "#E5F1DB",
                    width: "250px",
                    p: 3,
                    flexShrink: 0,
                    borderRight: "2px solid #C8E0B2",
                }}
            >
                <Typography sx={{ fontSize: "18px", fontWeight: "700", color: "#4D8009", mb: 2 }}>
                    Danh sách đề thi
                </Typography>

                {[1, 2, 3, 4].map((exam) => (
                    <Button
                        key={exam}
                        variant={selectedExam === exam ? "contained" : "outlined"}
                        fullWidth
                        sx={{
                            mb: 2,
                            borderRadius: "10px",
                            fontWeight: "600",
                            bgcolor: selectedExam === exam ? "#4D8009" : "white",
                            color: selectedExam === exam ? "white" : "#4D8009",
                            "&:hover": {
                                bgcolor: selectedExam === exam ? "#3b6507" : "#F0F8EB",
                            },
                        }}
                        onClick={() => {
                            setSelectedExam(exam);
                            setScore(null);
                            setAnswers({});
                        }}
                    >
                        Đề {exam}
                    </Button>
                ))}
            </Box>

            {/* Nội dung chính */}
            <Box
                sx={{
                    p: 4,
                    margin: "0 auto",
                    fontFamily: "Arial, sans-serif",
                    maxWidth: "800px",
                    flexGrow: 1,
                }}
            >
                <Typography
                    variant="h3"
                    gutterBottom
                    textAlign="center"
                    sx={{ color: "primary.main", fontWeight: "bold", mb: 4 }}
                >
                    📝 Ôn luyện chính trị - Đề {selectedExam}
                </Typography>

                {visibleQuestions.map((q, index) => {
                    const globalIndex = startIndex + index;
                    return (
                        <Card
                            key={globalIndex}
                            sx={{
                                mb: 3,
                                boxShadow: 3,
                                borderRadius: 3,
                                transition: "transform 0.2s ease",
                                "&:hover": { transform: "scale(1.01)" },
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" sx={{ mb: 1, fontWeight: "600" }}>
                                    {index + 1}. {q.question}
                                </Typography>
                                <RadioGroup
                                    value={answers[globalIndex] || ""}
                                    onChange={(e) => handleChange(globalIndex, e.target.value)}
                                >
                                    {q.options.map((option, i) => {
                                        let optionColor = "inherit";
                                        if (score !== null) {
                                            if (option === q.answer) optionColor = "green";
                                            else if (answers[globalIndex] === option) optionColor = "red";
                                        }

                                        return (
                                            <FormControlLabel
                                                key={i}
                                                value={option}
                                                control={<Radio sx={{ color: optionColor }} />}
                                                label={
                                                    <Typography
                                                        sx={{
                                                            p: 1,
                                                            color: optionColor,
                                                            mb: 1,
                                                            borderRadius: "8px",
                                                            backgroundColor:
                                                                score !== null && option === q.answer
                                                                    ? "#DFF2E0"
                                                                    : "transparent",
                                                        }}
                                                    >
                                                        {option}
                                                    </Typography>
                                                }
                                            />
                                        );
                                    })}
                                </RadioGroup>
                            </CardContent>
                        </Card>
                    );
                })}

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    fullWidth
                    sx={{
                        py: 1.5,
                        borderRadius: "12px",
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                        mt: 2,
                    }}
                >
                    Nộp bài
                </Button>

                {score !== null && (
                    <Typography
                        variant="h5"
                        sx={{
                            mt: 4,
                            textAlign: "center",
                            color: score > visibleQuestions.length / 2 ? "green" : "red",
                            fontWeight: "bold",
                        }}
                    >
                        ✅ Bạn đúng {score}/{visibleQuestions.length} câu!
                    </Typography>
                )}
            </Box>
        </Box>
    );
}

export default App;
