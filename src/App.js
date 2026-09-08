import { useState } from "react";
import "./index.css";
import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    FormControlLabel,
    LinearProgress,
    Menu,
    MenuItem,
    Radio,
    RadioGroup,
    Stack,
    Typography,
} from "@mui/material";
import quizData from "./questions.js";

const QUESTIONS_PER_EXAM = 30;
const examNumbers = Array.from({ length: Math.ceil(quizData.length / QUESTIONS_PER_EXAM) }, (_, index) => index + 1);

function App() {
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [selectedExam, setSelectedExam] = useState(1);
    const [randomQuestions, setRandomQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [answered, setAnswered] = useState(false);
    const [examMenuAnchor, setExamMenuAnchor] = useState(null);

    const isRandomExam = randomQuestions.length > 0;
    const startIndex = (selectedExam - 1) * QUESTIONS_PER_EXAM;
    const visibleQuestions = isRandomExam
        ? randomQuestions
        : quizData.slice(startIndex, startIndex + QUESTIONS_PER_EXAM);
    const currentQuestion = isRandomExam ? null : visibleQuestions[currentIndex];
    const selectedAnswer = answers[startIndex + currentIndex];
    const answeredCount = isRandomExam ? Object.keys(answers).length : currentIndex + (answered ? 1 : 0);
    const progress = (answeredCount / visibleQuestions.length) * 100;

    const resetExamState = () => {
        setScore(0);
        setAnswers({});
        setShowResult(false);
        setCurrentIndex(0);
        setAnswered(false);
    };

    const handleSelectExam = (exam) => {
        setSelectedExam(exam);
        setRandomQuestions([]);
        resetExamState();
    };

    const handleRandomExam = () => {
        const shuffled = [...quizData].sort(() => Math.random() - 0.5);
        setRandomQuestions(shuffled.slice(0, QUESTIONS_PER_EXAM));
        setSelectedExam(null);
        resetExamState();
    };

    const handleChange = (questionIndex, value) => {
        setAnswers((previousAnswers) => ({
            ...previousAnswers,
            [questionIndex]: value,
        }));
    };

    const handleSubmitAnswer = () => {
        if (answered) return;

        const globalIndex = startIndex + currentIndex;
        if (answers[globalIndex] === currentQuestion.answer) {
            setScore((previousScore) => previousScore + 1);
        }
        setAnswered(true);
    };

    const handleNext = () => {
        if (currentIndex < visibleQuestions.length - 1) {
            setCurrentIndex((previousIndex) => previousIndex + 1);
            setAnswered(false);
        } else {
            setShowResult(true);
        }
    };

    const handleSubmitRandom = () => {
        let newScore = 0;
        randomQuestions.forEach((question, index) => {
            if (answers[index] === question.answer) newScore += 1;
        });
        setScore(newScore);
        setShowResult(true);
    };

    const getOptionColors = (option, selected, revealed, answer) => {
        if (revealed && option === answer) {
            return { border: "#72bd91", background: "#edf9f1", color: "#17643a" };
        }
        if (revealed && selected) {
            return { border: "#ed8e8e", background: "#fff2f2", color: "#a72f2f" };
        }
        if (selected) {
            return { border: "#3c8b69", background: "#eff8f4", color: "#174c38" };
        }
        return { border: "#dce5e0", background: "#ffffff", color: "#263a31" };
    };

    const renderOption = ({ option, index, selected, revealed, answer }) => {
        const colors = getOptionColors(option, selected, revealed, answer);

        return (
            <FormControlLabel
                key={index}
                value={option}
                disabled={revealed}
                control={
                    <Radio
                        sx={{
                            mt: "1px",
                            color: "#a9b9b0",
                            "&.Mui-checked": { color: colors.color },
                        }}
                    />
                }
                label={
                    <Typography
                        component="span"
                        sx={{
                            color: colors.color,
                            fontSize: { xs: "0.94rem", sm: "1rem" },
                            lineHeight: 1.65,
                        }}
                    >
                        {option}
                    </Typography>
                }
                sx={{
                    width: "100%",
                    m: 0,
                    mb: 1.25,
                    px: { xs: 1, sm: 1.5 },
                    py: { xs: 0.65, sm: 0.8 },
                    alignItems: "flex-start",
                    border: "1.5px solid",
                    borderColor: colors.border,
                    borderRadius: "14px",
                    bgcolor: colors.background,
                    transition: "border-color 160ms ease, background-color 160ms ease, transform 160ms ease",
                    "&:hover": revealed
                        ? {}
                        : {
                              borderColor: "#75a991",
                              bgcolor: selected ? colors.background : "#f7fbf9",
                              transform: "translateY(-1px)",
                          },
                    "&.Mui-disabled": { opacity: 1 },
                    ".MuiFormControlLabel-label.Mui-disabled": { color: colors.color },
                }}
            />
        );
    };

    const resultCard = (
        <Card className="result-card" elevation={0}>
            <CardContent sx={{ p: { xs: 3, sm: 5 }, "&:last-child": { pb: { xs: 3, sm: 5 } } }}>
                <Box className="result-icon">🏆</Box>
                <Typography component="h2" sx={{ mt: 2, fontSize: { xs: "1.35rem", sm: "1.7rem" }, fontWeight: 800 }}>
                    Hoàn thành bài ôn luyện!
                </Typography>
                <Typography sx={{ mt: 1, color: "text.secondary" }}>Kết quả của bạn</Typography>
                <Typography className="result-score">
                    {score}
                    <Typography component="span">/{visibleQuestions.length}</Typography>
                </Typography>
                <Typography sx={{ color: "#557066", fontWeight: 600 }}>
                    {score >= visibleQuestions.length * 0.8
                        ? "Rất tốt! Hãy tiếp tục phát huy nhé."
                        : "Ôn lại một chút rồi thử sức lần nữa nhé."}
                </Typography>
            </CardContent>
        </Card>
    );

    return (
        <Box className={`app-shell ${isRandomExam ? "random-layout" : "single-layout"}`}>
            <Box component="aside" className="sidebar">
                <Box className="brand">
                    <Box className="brand-mark">CT</Box>
                    <Box className="brand-copy">
                        <Typography className="brand-title">Ôn luyện CT</Typography>
                        <Typography className="brand-subtitle">Ngân hàng {quizData.length} câu hỏi</Typography>
                    </Box>

                    <Box className="mobile-exam-selector">
                        <Button
                            className="mobile-exam-trigger"
                            aria-label="Chọn đề ôn"
                            aria-controls={examMenuAnchor ? "mobile-exam-menu" : undefined}
                            aria-expanded={examMenuAnchor ? "true" : undefined}
                            aria-haspopup="true"
                            onClick={(event) => setExamMenuAnchor(event.currentTarget)}
                        >
                            <span>{"Chọn đề >"}</span>
                            <span>{isRandomExam ? "Ngẫu nhiên" : `Đề ${selectedExam}`}</span>
                        </Button>
                        <Menu
                            id="mobile-exam-menu"
                            anchorEl={examMenuAnchor}
                            open={Boolean(examMenuAnchor)}
                            onClose={() => setExamMenuAnchor(null)}
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                            transformOrigin={{ vertical: "top", horizontal: "right" }}
                            slotProps={{
                                paper: {
                                    sx: {
                                        mt: 1,
                                        minWidth: 190,
                                        p: 0.75,
                                        border: "1px solid #dce7e1",
                                        borderRadius: "14px",
                                        boxShadow: "0 14px 40px rgba(11, 43, 31, 0.2)",
                                    },
                                },
                            }}
                        >
                            {examNumbers.map((exam) => (
                                <MenuItem
                                    key={exam}
                                    selected={selectedExam === exam && !isRandomExam}
                                    onClick={() => {
                                        handleSelectExam(exam);
                                        setExamMenuAnchor(null);
                                    }}
                                    sx={{
                                        minHeight: 42,
                                        borderRadius: "9px",
                                        color: "#264638",
                                        fontSize: "0.86rem",
                                        fontWeight: 600,
                                        "&.Mui-selected": { color: "#174c38", bgcolor: "#e8f4ee" },
                                        "&.Mui-selected:hover": { bgcolor: "#dceee5" },
                                    }}
                                >
                                    Đề {exam}
                                </MenuItem>
                            ))}
                            <MenuItem
                                selected={isRandomExam}
                                onClick={() => {
                                    handleRandomExam();
                                    setExamMenuAnchor(null);
                                }}
                                sx={{
                                    minHeight: 42,
                                    mt: 0.5,
                                    borderTop: "1px solid #e5ece8",
                                    borderRadius: "9px",
                                    color: "#264638",
                                    fontSize: "0.86rem",
                                    fontWeight: 600,
                                    "&.Mui-selected": { color: "#174c38", bgcolor: "#e8f4ee" },
                                    "&.Mui-selected:hover": { bgcolor: "#dceee5" },
                                }}
                            >
                                Đề ngẫu nhiên
                            </MenuItem>
                        </Menu>
                    </Box>
                </Box>

                <Typography className="nav-label">CHỌN ĐỀ ÔN</Typography>
                <Box className="exam-nav">
                    {examNumbers.map((exam) => (
                        <Button
                            key={exam}
                            className={`exam-button ${selectedExam === exam && !isRandomExam ? "active" : ""}`}
                            onClick={() => handleSelectExam(exam)}
                        >
                            <span>Đề {exam}</span>
                            <small>{QUESTIONS_PER_EXAM} câu</small>
                        </Button>
                    ))}

                    <Button
                        className={`exam-button random-button ${isRandomExam ? "active" : ""}`}
                        onClick={handleRandomExam}
                    >
                        <span>Đề ngẫu nhiên</span>
                        <small>30 câu</small>
                    </Button>
                </Box>

                <Box className="sidebar-note">
                    <span>💡</span>
                    <Typography>Chọn đáp án phù hợp nhất cho mỗi câu hỏi.</Typography>
                </Box>
            </Box>

            <Box component="main" className="main-content">
                <Box className="content-container">
                    <Box component="header" className="page-header">
                        <Stack direction="row" alignItems="center" justifyContent="space-between" gap={1}>
                            <Box>
                                <Typography className="eyebrow">BÀI ÔN LUYỆN</Typography>
                                <Typography component="h1" className="page-title">
                                    {isRandomExam ? "Đề ngẫu nhiên" : `Đề số ${selectedExam}`}
                                </Typography>
                            </Box>
                            <Chip label={`${answeredCount}/${visibleQuestions.length} câu`} className="progress-chip" />
                        </Stack>
                        <LinearProgress variant="determinate" value={progress} className="progress-bar" />
                    </Box>

                    {isRandomExam ? (
                        <Box>
                            {!showResult && (
                                <Typography className="section-hint">
                                    Hoàn thành 30 câu hỏi bên dưới và nhấn “Nộp bài” để xem kết quả.
                                </Typography>
                            )}

                            {showResult && <Box sx={{ mb: 3 }}>{resultCard}</Box>}

                            {visibleQuestions.map((question, index) => (
                                <Card key={index} className="question-card" elevation={0}>
                                    <CardContent className="question-card-content">
                                        <Stack direction="row" alignItems="flex-start" gap={1.5}>
                                            <Box className="question-number">{index + 1}</Box>
                                            <Typography component="h2" className="question-text">
                                                {question.question}
                                            </Typography>
                                        </Stack>
                                        <RadioGroup
                                            value={answers[index] || ""}
                                            onChange={(event) => handleChange(index, event.target.value)}
                                            sx={{ mt: { xs: 2, sm: 2.5 } }}
                                        >
                                            {question.options.map((option, optionIndex) =>
                                                renderOption({
                                                    option,
                                                    index: optionIndex,
                                                    selected: answers[index] === option,
                                                    revealed: showResult,
                                                    answer: question.answer,
                                                }),
                                            )}
                                        </RadioGroup>
                                    </CardContent>
                                </Card>
                            ))}

                            {!showResult && (
                                <Box className="submit-panel">
                                    <Box>
                                        <Typography sx={{ fontWeight: 800, color: "#193d2e" }}>
                                            Đã chọn {answeredCount}/{visibleQuestions.length} câu
                                        </Typography>
                                        <Typography sx={{ color: "#6b7f76", fontSize: "0.86rem" }}>
                                            Bạn vẫn có thể nộp bài khi chưa chọn hết đáp án.
                                        </Typography>
                                    </Box>
                                    <Button className="primary-action" onClick={handleSubmitRandom}>
                                        Nộp bài
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    ) : (
                        <Box className="single-quiz-layout">
                            {!showResult ? (
                                <Card className="question-card single-question-card" elevation={0}>
                                    <CardContent className="question-card-content">
                                        <Stack
                                            direction="row"
                                            alignItems="center"
                                            justifyContent="space-between"
                                            gap={2}
                                        >
                                            <Chip label={`Câu ${currentIndex + 1}`} className="question-chip" />
                                            <Typography className="question-position">
                                                {currentIndex + 1} / {visibleQuestions.length}
                                            </Typography>
                                        </Stack>

                                        <Typography component="h2" className="question-text single-question-text">
                                            {currentQuestion.question}
                                        </Typography>

                                        <RadioGroup
                                            className="answers-scroll"
                                            value={selectedAnswer || ""}
                                            onChange={(event) =>
                                                handleChange(startIndex + currentIndex, event.target.value)
                                            }
                                            sx={{ mt: { xs: 2.25, sm: 3 } }}
                                        >
                                            {currentQuestion.options.map((option, optionIndex) =>
                                                renderOption({
                                                    option,
                                                    index: optionIndex,
                                                    selected: selectedAnswer === option,
                                                    revealed: answered,
                                                    answer: currentQuestion.answer,
                                                }),
                                            )}
                                        </RadioGroup>

                                        {answered && (
                                            <Box
                                                className={`answer-feedback ${selectedAnswer === currentQuestion.answer ? "correct" : "incorrect"}`}
                                            >
                                                <span>{selectedAnswer === currentQuestion.answer ? "✓" : "!"}</span>
                                                <Typography>
                                                    {selectedAnswer === currentQuestion.answer
                                                        ? "Chính xác! Bạn đã chọn đúng đáp án."
                                                        : "Chưa chính xác. Đáp án đúng đã được đánh dấu."}
                                                </Typography>
                                            </Box>
                                        )}
                                    </CardContent>
                                </Card>
                            ) : (
                                resultCard
                            )}

                            {!showResult && (
                                <Box className="action-row">
                                    <Button
                                        className="secondary-action"
                                        onClick={handleSubmitAnswer}
                                        disabled={answered}
                                    >
                                        Kiểm tra đáp án
                                    </Button>
                                    <Button className="primary-action" onClick={handleNext} disabled={!answered}>
                                        {currentIndex === visibleQuestions.length - 1 ? "Xem kết quả" : "Câu tiếp theo"}
                                        <span aria-hidden="true">→</span>
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default App;
