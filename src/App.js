import React, { useState } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import quizData from "./questions.js";

function App() {
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);
    const [selectedExam, setSelectedExam] = useState(1);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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

    const startIndex = (selectedExam - 1) * 30;
    const endIndex = startIndex + 30;
    const visibleQuestions = quizData.slice(startIndex, endIndex);

    return (
        <Box
            sx={{
                m: 0,
                width: "100vw",
                fontFamily: "Arial, sans-serif",
                bgcolor: "#F6F8FA",
                minHeight: "100vh",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
            }}
        >
            {/* Sidebar or Topbar */}
            <Box
                sx={{
                    bgcolor: "#E5F1DB",
                    width: isMobile ? "100%" : "250px",
                    p: 2,
                    flexShrink: 0,
                    borderRight: isMobile ? "none" : "2px solid #C8E0B2",
                    borderBottom: isMobile ? "2px solid #C8E0B2" : "none",
                    display: "flex",
                    justifyContent: isMobile ? "center" : "flex-start",
                    gap: 1,
                    flexWrap: "wrap",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#4D8009",
                        mb: isMobile ? 1 : 2,
                        width: "100%",
                        textAlign: isMobile ? "center" : "left",
                    }}
                >
                    Danh sách đề thi
                </Typography>

                {[1, 2, 3, 4].map((exam) => (
                    <Button
                        key={exam}
                        variant={selectedExam === exam ? "contained" : "outlined"}
                        sx={{
                            borderRadius: "10px",
                            fontWeight: "600",
                            minWidth: isMobile ? "80px" : "100%",
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

            {/* Main content */}
            <Box
                sx={{
                    p: isMobile ? 2 : 4,
                    margin: "0 auto",
                    maxWidth: "800px",
                    flexGrow: 1,
                }}
            >
                <Typography
                    variant={isMobile ? "h5" : "h3"}
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
                                "&:hover": { transform: "scale(1.01)" },
                            }}
                        >
                            <CardContent>
                                <Typography variant={isMobile ? "subtitle1" : "h6"} sx={{ mb: 1, fontWeight: "600" }}>
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
                                                            fontSize: isMobile ? "0.9rem" : "1rem",
                                                            color: optionColor,
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
                        fontSize: isMobile ? "1rem" : "1.1rem",
                        fontWeight: "bold",
                        mt: 2,
                    }}
                >
                    Nộp bài
                </Button>

                {score !== null && (
                    <Typography
                        variant={isMobile ? "h6" : "h5"}
                        sx={{
                            mt: 3,
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
