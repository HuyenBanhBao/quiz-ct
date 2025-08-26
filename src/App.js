import { useState } from "react";
import "./index.css";
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
    const [score, setScore] = useState(0);
    const [selectedExam, setSelectedExam] = useState(1);
    const [randomQuestions, setRandomQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0); // index câu đang làm (cho đề 1-4)
    const [showResult, setShowResult] = useState(false);
    const [answered, setAnswered] = useState(false); // đã bấm "Trả lời" chưa

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    // random đề
    const handleRandomExam = () => {
        const shuffled = [...quizData].sort(() => Math.random() - 0.5);
        setRandomQuestions(shuffled.slice(0, 30));
        setSelectedExam(null);
        setScore(0);
        setAnswers({});
        setShowResult(false);
        setCurrentIndex(0);
    };

    // tính câu hỏi đang hiển thị
    const startIndex = (selectedExam - 1) * 30;
    const endIndex = startIndex + 30;
    const visibleQuestions = randomQuestions.length > 0 ? randomQuestions : quizData.slice(startIndex, endIndex);

    const currentQuestion = randomQuestions.length > 0 ? null : visibleQuestions[currentIndex]; // chỉ dùng cho đề 1-4

    const handleChange = (qIndex, value) => {
        setAnswers({ ...answers, [qIndex]: value });
    };

    // bấm Trả lời
    const handleSubmitAnswer = () => {
        if (answered) return;
        const globalIndex = startIndex + currentIndex;
        if (answers[globalIndex] === currentQuestion.answer) {
            setScore((prev) => prev + 1);
        }
        setAnswered(true);
    };

    // bấm Next
    const handleNext = () => {
        if (currentIndex < 29) {
            setCurrentIndex(currentIndex + 1);
            setAnswered(false);
        } else {
            setShowResult(true);
        }
    };

    // random mode → giữ nguyên kiểu cũ (30 câu cùng lúc)
    const handleSubmitRandom = () => {
        let newScore = 0;
        randomQuestions.forEach((q, index) => {
            if (answers[index] === q.answer) newScore++;
        });
        setScore(newScore);
        setShowResult(true);
    };

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
            {/* Sidebar */}
            <Box
                sx={{
                    bgcolor: "#E5F1DB",
                    width: isMobile ? "100%" : "250px",
                    p: 2,
                    flexShrink: 0,
                    borderRight: isMobile ? "none" : "2px solid #C8E0B2",
                    borderBottom: isMobile ? "2px solid #C8E0B2" : "none",
                    display: "flex",
                    flexDirection: isMobile ? "row" : "column",
                    alignItems: isMobile ? "center" : "stretch",
                    justifyContent: isMobile ? "center" : "flex-start",
                    gap: 1,
                    flexWrap: isMobile ? "wrap" : "nowrap",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#4D8009",
                        mb: isMobile ? 1 : 2,
                        width: "100%",
                        textAlign: "center",
                    }}
                >
                    Danh sách đề thi
                </Typography>

                {[1, 2, 3, 4].map((exam) => (
                    <Button
                        key={exam}
                        variant={selectedExam === exam ? "contained" : "outlined"}
                        fullWidth={!isMobile}
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
                            setRandomQuestions([]);
                            setScore(0);
                            setAnswers({});
                            setShowResult(false);
                            setCurrentIndex(0);
                            setAnswered(false);
                        }}
                    >
                        Đề {exam}
                    </Button>
                ))}

                <Button
                    variant={randomQuestions.length > 0 ? "contained" : "outlined"}
                    fullWidth={!isMobile}
                    sx={{
                        borderRadius: "10px",
                        fontWeight: "600",
                        minWidth: isMobile ? "100px" : "100%",
                        bgcolor: randomQuestions.length > 0 ? "#4D8009" : "white",
                        color: randomQuestions.length > 0 ? "white" : "#4D8009",
                        "&:hover": {
                            bgcolor: randomQuestions.length > 0 ? "#3b6507" : "#F0F8EB",
                        },
                    }}
                    onClick={handleRandomExam}
                >
                    Đề ngẫu nhiên
                </Button>
            </Box>

            {/* Main content */}
            <Box sx={{ p: isMobile ? 2 : 4, margin: "0 auto", maxWidth: "800px", flexGrow: 1 }}>
                <Typography
                    variant={isMobile ? "h5" : "h3"}
                    gutterBottom
                    textAlign="center"
                    sx={{ color: "primary.main", fontWeight: "bold", mb: 4 }}
                >
                    📝 Ôn luyện chính trị {randomQuestions.length > 0 ? "- Đề ngẫu nhiên" : `- Đề ${selectedExam}`}
                </Typography>

                {/* Chế độ random → hiện 30 câu cùng lúc */}
                {randomQuestions.length > 0 ? (
                    <>
                        {visibleQuestions.map((q, index) => (
                            <Card key={index} sx={{ mb: 3, boxShadow: 3, borderRadius: 3 }}>
                                <CardContent>
                                    <Typography component="span" sx={{ mb: 2, display: "block", fontWeight: "600" }}>
                                        {index + 1}. {q.question}
                                    </Typography>
                                    <RadioGroup
                                        value={answers[index] || ""}
                                        onChange={(e) => handleChange(index, e.target.value)}
                                    >
                                        {q.options.map((option, i) => (
                                            <FormControlLabel
                                                key={i}
                                                value={option}
                                                control={<Radio />}
                                                label={option}
                                            />
                                        ))}
                                    </RadioGroup>
                                </CardContent>
                            </Card>
                        ))}

                        <Button variant="contained" color="primary" onClick={handleSubmitRandom} fullWidth>
                            Nộp bài
                        </Button>

                        {showResult && (
                            <Typography variant="h5" sx={{ mt: 3, textAlign: "center", fontWeight: "bold" }}>
                                ✅ Bạn đúng {score}/{visibleQuestions.length} câu!
                            </Typography>
                        )}
                    </>
                ) : (
                    // Chế độ đề 1-4 → từng câu
                    <>
                        {!showResult ? (
                            <Card sx={{ mb: 3, boxShadow: 3, borderRadius: 3 }}>
                                <CardContent>
                                    <Typography component="span" sx={{ mb: 2, display: "block", fontWeight: "600" }}>
                                        Câu {currentIndex + 1}: {currentQuestion.question}
                                    </Typography>
                                    <RadioGroup
                                        value={answers[startIndex + currentIndex] || ""}
                                        onChange={(e) => handleChange(startIndex + currentIndex, e.target.value)}
                                    >
                                        {currentQuestion.options.map((option, i) => {
                                            let optionColor = "inherit";
                                            if (answered) {
                                                if (option === currentQuestion.answer) optionColor = "green";
                                                else if (answers[startIndex + currentIndex] === option)
                                                    optionColor = "red";
                                            }

                                            return (
                                                <FormControlLabel
                                                    key={i}
                                                    value={option}
                                                    control={<Radio sx={{ color: optionColor }} />}
                                                    disabled={answered} // không cho đổi sau khi trả lời
                                                    label={
                                                        <Typography
                                                            sx={{
                                                                color: optionColor,
                                                                backgroundColor:
                                                                    answered && option === currentQuestion.answer
                                                                        ? "#DFF2E0"
                                                                        : "transparent",
                                                                borderRadius: "8px",
                                                                p: 0.5,
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
                        ) : (
                            <Typography
                                variant="h5"
                                sx={{ mt: 3, textAlign: "center", fontWeight: "bold", color: "blue" }}
                            >
                                🎉 Kết thúc! Bạn đúng {score}/{visibleQuestions.length} câu!
                            </Typography>
                        )}

                        {!showResult && (
                            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                                <Button
                                    variant="contained"
                                    color="success"
                                    onClick={handleSubmitAnswer}
                                    disabled={answered}
                                >
                                    Trả lời
                                </Button>
                                <Button variant="contained" onClick={handleNext} disabled={!answered}>
                                    Next
                                </Button>
                            </Box>
                        )}
                    </>
                )}
            </Box>
        </Box>
    );
}

export default App;
