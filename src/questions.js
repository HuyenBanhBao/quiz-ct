const quizData = [
    {
        question: ` Chủ đề Đại hội XIV của Đảng được xác định là gì?`,
        options: [
            `A. Đoàn kết - Dân chủ - Kỷ cương - Phát triển.`,
            `B. Kiên định mục tiêu độc lập dân tộc và chủ nghĩa xã hội.`,
            `C. Dưới lá cờ vẻ vang của Đảng, chung sức, đồng lòng thực hiện thắng lợi các mục tiêu phát triển đất nước đến năm 2030; tự chủ chiến lược, tự cường, tự tin, tiến mạnh trong kỷ nguyên vươn mình của dân tộc, vì hòa bình, độc lập, dân chủ, phồn vinh, hạnh phúc, vững bước đi lên chủ nghĩa xã hội.`,
            `D. Xây dựng Đảng và hệ thống chính trị trong sạch, vững mạnh toàn diện; phát triển nhanh và bền vững đất nước.`,
        ],
        answer: "C. Dưới lá cờ vẻ vang của Đảng, chung sức, đồng lòng thực hiện thắng lợi các mục tiêu phát triển đất nước đến năm 2030; tự chủ chiến lược, tự cường, tự tin, tiến mạnh trong kỷ nguyên vươn mình của dân tộc, vì hòa bình, độc lập, dân chủ, phồn vinh, hạnh phúc, vững bước đi lên chủ nghĩa xã hội.",
    },
    {
        question: ` Văn kiện Đại hội lần thứ XIV của Đảng đánh giá kết quả điều chỉnh tổ chức Quân đội, Công an như thế nào?`,
        options: [
            `A. Cơ bản hoàn thành điều chỉnh, sắp xếp tổ chức Quân đội, Công an tinh, gọn, mạnh.`,
            `B. Đã hoàn thành việc chuyển đổi tất cả các đơn vị sự nghiệp quốc phòng sang mô hình doanh nghiệp hiện đại.`,
            `C. Thực hiện sáp nhập hoàn toàn các cơ quan hậu cần và kỹ thuật ở cấp Trung ương của Quân đội và Công an.`,
            `D. Đã xây dựng lực lượng vũ trang theo mô hình quản trị đơn vị hiện đại, đa năng, linh hoạt tại các địa phương.`,
        ],
        answer: "A. Cơ bản hoàn thành điều chỉnh, sắp xếp tổ chức Quân đội, Công an tinh, gọn, mạnh.",
    },
    {
        question: ` Văn kiện Đại hội lần thứ XIV của Đảng đánh giá về công nghiệp quốc phòng, an ninh như thế nào?`,
        options: [
            `A. Công nghiệp quốc phòng, an ninh được đầu tư phát triển, có đột phá, bảo đảm tính lưỡng dụng, hiện đại.`,
            `B. Đã xây dựng được hệ thống công nghiệp quốc phòng độc lập, tự chủ, cạnh tranh trực tiếp với các nước lớn.`,
            `C. Công nghiệp quốc phòng đã trở thành ngành mũi nhọn hàng đầu trong cơ cấu tổng sản phẩm nội địa quốc gia.`,
            `D. Hoàn thành việc tư nhân hóa các nhà máy quốc phòng nhằm tăng tính linh hoạt và sáng tạo trong việc sản xuất.`,
        ],
        answer: "A. Công nghiệp quốc phòng, an ninh được đầu tư phát triển, có đột phá, bảo đảm tính lưỡng dụng, hiện đại.",
    },
    {
        question: ` Văn kiện Đại hội lần thứ XIV của Đảng đánh giá về công tác đối ngoại quốc phòng, an ninh như thế nào?`,
        options: [
            `A. Đã thiết lập liên minh quân sự chiến lược đồng bộ với tất cả các nước đối tác chiến lược toàn diện hiện nay.`,
            `B. Chuyển mạnh từ việc tham gia hoạt động hỗ trợ nhân đạo sang tham gia các khối liên minh phòng thủ đa phương.`,
            `C. Hoàn thành xây dựng hệ thống các căn cứ hậu cần quốc phòng tại tất cả các nước đối tác quan trọng ở nước ngoài.`,
            `D. Đẩy mạnh hội nhập quốc tế và đối ngoại về quốc phòng, an ninh; tham gia tích cực và hiệu quả vào các hoạt động gìn giữ hoà bình của Liên hợp quốc.`,
        ],
        answer: "D. Đẩy mạnh hội nhập quốc tế và đối ngoại về quốc phòng, an ninh; tham gia tích cực và hiệu quả vào các hoạt động gìn giữ hoà bình của Liên hợp quốc.",
    },
    {
        question: ` Văn kiện Đại hội lần thứ XIV của Đảng đánh giá về kết quả bảo vệ chủ quyền và lợi ích quốc gia từ sớm, từ xa như thế nào?`,
        options: [
            `A. Đã xây dựng các chiến lược tấn công chủ động để ngăn chặn mọi nguy cơ quân sự ngay từ khi mới hình thành.`,
            `B. Thiết lập các vùng đệm an ninh kỹ thuật số vươn xa ra ngoài phạm vi lãnh thổ quốc gia và không gian mạng.`,
            `C. Ngăn ngừa các nguy cơ chiến tranh, xung đột, bảo vệ Tổ quốc từ sớm, từ xa.`,
            `D. Hoàn thành việc ký kết các hiệp ước an ninh tập thể để bảo đảm lợi ích quốc gia trên quy mô toàn cầu hiện nay.`,
        ],
        answer: "C. Ngăn ngừa các nguy cơ chiến tranh, xung đột, bảo vệ Tổ quốc từ sớm, từ xa.",
    },
    {
        question: ` Văn kiện Đại hội lần thứ XIV của Đảng của Đảng đánh giá về vai trò của công tác tư tưởng trong lực lượng vũ trang như thế nào?`,
        options: [
            `A. Chuyển hóa tư tưởng chính trị của cán bộ chiến sĩ theo hướng thực dụng kinh tế nhằm hội nhập sâu rộng hơn.`,
            `B. Xây dựng Quân đội nhân dân, Công an nhân dân... tuyệt đối trung thành với Tổ quốc, với Đảng, Nhà nước và Nhân dân.`,
            `C. Ưu tiên tập trung đào tạo kỹ năng công nghệ thông tin thay cho công tác bồi dưỡng lý luận chính trị và đạo đức.`,
            `D. Hoàn thành xây dựng môi trường văn hóa số lành mạnh nhằm thay thế hoàn toàn cho các giá trị truyền thống cũ.`,
        ],
        answer: "B. Xây dựng Quân đội nhân dân, Công an nhân dân... tuyệt đối trung thành với Tổ quốc, với Đảng, Nhà nước và Nhân dân.",
    },
    {
        question: ` Văn kiện Đại hội lần thứ XIV của Đảng đánh giá về việc ứng dụng khoa học công nghệ trong quốc phòng, an ninh như thế nào?`,
        options: [
            `A. Đã tự chủ hoàn toàn 100% tất cả các công nghệ lõi trong sản xuất các loại vũ khí trang bị kỹ thuật hiện đại mới.`,
            `B. Chuyển đổi tất cả các viện nghiên cứu quốc phòng sang hoạt động theo mô hình các công ty startup khởi nghiệp hiện nay.`,
            `C. Hoàn thành tích hợp trí tuệ nhân tạo vào tất cả các quy trình ra quyết định tác chiến chiến lược của quân đội ta.`,
            `D. Tập trung nghiên cứu, phát triển, ứng dụng khoa học quân sự, khoa học an ninh, thành tựu của khoa học, công nghệ hiện đại.`,
        ],
        answer: "D. Tập trung nghiên cứu, phát triển, ứng dụng khoa học quân sự, khoa học an ninh, thành tựu của khoa học, công nghệ hiện đại.",
    },
    {
        question: ` Trong lĩnh vực văn hoá, Văn kiện Đại hội lần thứ XIV của Đảng nhận định hạn chế cốt lõi là gì?`,
        options: [
            `A. Các hoạt động văn hoá truyền thống không còn được quan tâm.`,
            `B. Văn hoá chưa thực sự trở thành nguồn lực, sức mạnh nội sinh và động lực mạnh mẽ của sự phát triển.`,
            `C. Chưa có sự tham gia của khu vực tư nhân vào phát triển văn hóa.`,
            `D. Các thiết chế văn hóa cơ sở đã bị thương mại hóa hoàn toàn.`,
        ],
        answer: "B. Văn hoá chưa thực sự trở thành nguồn lực, sức mạnh nội sinh và động lực mạnh mẽ của sự phát triển.",
    },
    {
        question: ` Trong công tác cán bộ, khâu nào được Văn kiện Đại hội lần thứ XIV của Đảng nhấn mạnh là còn một số bất cập?`,
        options: [
            `A. Công tác cán bộ còn một số bất cập, nhất là đánh giá cán bộ.`,
            `B. Nhất là khâu luân chuyển cán bộ từ Trung ương về địa phương.`,
            `C. Nhất là khâu quy hoạch cán bộ cấp chiến lược dài hạn.`,
            `D. Nhất là khâu giải quyết chế độ hưu trí cho cán bộ.`,
        ],
        answer: "A. Công tác cán bộ còn một số bất cập, nhất là đánh giá cán bộ.",
    },
    {
        question: ` Việc đầu tư xây dựng khu vực phòng thủ ở một số địa phương được Văn kiện Đại hội lần thứ XIV của Đảng đánh giá ra sao?`,
        options: [
            `A. Đã vượt quá yêu cầu thực tiễn của quốc phòng địa phương.`,
            `B. Chỉ tập trung ở các tỉnh biên giới phía Bắc và Tây Nguyên.`,
            `C. Chưa tương xứng với phát triển kinh tế - xã hội.`,
            `D. Đã hoàn thiện nhưng thiếu cơ chế phối hợp tác chiến đồng bộ.`,
        ],
        answer: "C. Chưa tương xứng với phát triển kinh tế - xã hội.",
    },
    {
        question: ` Yếu tố nào được Văn kiện Đại hội lần thứ XIV của Đảng coi là "điểm nghẽn của điểm nghẽn"?`,
        options: [
            `A. Hệ thống kết cấu hạ tầng giao thông kết nối vùng chưa đồng bộ.`,
            `B. Nguồn nhân lực chất lượng cao phục vụ chuyển đổi số còn thiếu hụt.`,
            `C. Hệ thống thể chế phát triển chưa đồng bộ, trở thành "điểm nghẽn của điểm nghẽn"`,
            `D. Nguồn vốn đầu tư trực tiếp nước ngoài giảm sút trong giai đoạn hậu Covid.`,
        ],
        answer: 'C. Hệ thống thể chế phát triển chưa đồng bộ, trở thành "điểm nghẽn của điểm nghẽn"',
    },
    {
        question: ` Theo Văn kiện Đại hội lần thứ XIV của Đảng nguyên nhân chủ quan, những tư duy tiêu cực nào chưa được khắc phục triệt để?`,
        options: [
            `A. Tư duy "cục bộ địa phương", "trọng nam khinh nữ".`,
            `B. Tư duy "Bao cấp", "trông chờ ỷ lại" vào trợ cấp cấp trên.`,
            `C. Tư duy "chạy theo thành tích", "báo cáo ảo"`,
            `D. "Tư duy nhiệm kỳ", "lợi ích nhóm" chưa được khắc phục triệt để.`,
        ],
        answer: "D. 'Tư duy nhiệm kỳ', 'lợi ích nhóm' chưa được khắc phục triệt để.",
    },
    {
        question: ` Văn kiện Đại hội lần thứ XIV của Đảng đánh giá vai trò giám sát của lực lượng nào chưa được phát huy hiệu quả (nêu trong phần nguyên nhân)?`,
        options: [
            `A. Chưa phát huy hiệu quả vai trò "giám sát" của Nhân dân.`,
            `B. Vai trò giám sát của các cơ quan báo chí truyền thông.`,
            `C. Vai trò giám sát của các tổ chức quốc tế độc lập.`,
            `D. Vai trò giám sát của các viện nghiên cứu kinh tế.`,
        ],
        answer: 'A. Chưa phát huy hiệu quả vai trò "giám sát" của Nhân dân.',
    },
    {
        question: ` Đại hội XIV của Đảng xác định quan điểm “Dân là gốc” được cụ thể hóa bằng nội dung nào?`,
        options: [
            `A. Nhân dân tham gia quyết định, giám sát, phản biện các chủ trương, chính sách.`,
            `B. Nhân dân thực hiện quyền làm chủ thông qua hệ thống chính trị các cấp.`,
            `C. Nhân dân tham gia xây dựng Đảng, chính quyền và pháp luật.`,
            `D. Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng.`,
        ],
        answer: "D. Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng.",
    },
    {
        question: ` Đại hội XIV của Đảng xác định vai trò của Nhân dân như thế nào?`,
        options: [
            `A. Đối tượng trực tiếp thụ hưởng các chính sách.`,
            `B. Lực lượng giám sát quyền lực nhà nước.`,
            `C. Vị trí trung tâm và chủ thể của phát triển.`,
            `D. Thành phần quan trọng của hệ thống chính trị.`,
        ],
        answer: "C. Vị trí trung tâm và chủ thể của phát triển.",
    },
    {
        question: ` Đại hội XIV của Đảng xác định yêu cầu gì đối với việc hoàn thiện thể chế phát triển đất nước?`,
        options: [
            `A. Thể chế cần ổn định lâu dài và hạn chế thay đổi.`,
            `B. Thể chế phải bảo đảm quản lý chặt chẽ mọi hoạt động kinh tế.`,
            `C. Thể chế phải thông thoáng, minh bạch, hiện đại và phù hợp thực tiễn.`,
            `D. Thể chế cần ưu tiên quản lý nhà nước đối với thị trường.`,
        ],
        answer: "C. Thể chế phải thông thoáng, minh bạch, hiện đại và phù hợp thực tiễn.",
    },
    {
        question: ` Vai trò của khoa học, công nghệ trong phát triển đất nước được Đại hội XIV của Đảng xác định như thế nào?`,
        options: [
            `A. Là lĩnh vực rất cần thiết ưu tiên đầu tư trong giai đoạn trước mắt.`,
            `B. Là công cụ hỗ trợ nâng cao năng lực quản lý nhà nước.`,
            `C. Là động lực then chốt thúc đẩy đổi mới mô hình tăng trưởng.`,
            `D. Là yếu tố quan trọng để mở rộng hợp tác quốc tế.`,
        ],
        answer: "C. Là động lực then chốt thúc đẩy đổi mới mô hình tăng trưởng.",
    },
    {
        question: ` Văn kiện Đại hội lần thứ XIV của Đảng đề ra định hướng phát triển công nghiệp quốc phòng, an ninh như thế nào?`,
        options: [
            `A. Thực hiện chuyên môn hóa sâu vào việc sản xuất các loại vũ khí thô sơ phục vụ cho mục tiêu xuất khẩu sang các quốc gia nghèo tại các khu vực khác trên thế giới nhằm mục tiêu thu ngoại tệ về cho ngân sách quốc gia phục vụ các dự án an sinh xã hội hiện nay.`,
            `B. Đẩy mạnh đột phá phát triển công nghiệp quốc phòng, công nghiệp an ninh, tự chủ, tự lực, tự cường, lưỡng dụng, hiện đại.`,
            `C. Thực hiện tư nhân hóa một cách hoàn toàn tất cả các tập đoàn công nghiệp quốc phòng hiện có của Nhà nước nhằm tăng cường tính cạnh tranh quốc tế và thu hút thêm các nguồn vốn đầu tư từ các tập đoàn quân sự tư nhân hàng đầu trên thế giới vào Việt Nam.`,
            `D. Nhà nước thực hiện dừng ngay tất cả các dự án nghiên cứu và sản xuất vũ khí nội địa để chuyển sang mua sắm các thiết bị quân sự và vũ khí hiện đại từ các 28 cường quốc quân sự lớn nhằm đảm bảo tính hiện đại nhanh chóng cho lực lượng vũ trang trong tình hình mới.`,
        ],
        answer: "B. Đẩy mạnh đột phá phát triển công nghiệp quốc phòng, công nghiệp an ninh, tự chủ, tự lực, tự cường, lưỡng dụng, hiện đại.",
    },
    {
        question: ` Văn kiện Đại hội lần thứ XIV của Đảng xác định tầm nhìn đến năm 2045 như thế nào?`,
        options: [
            `A. Duy trì là nước đang phát triển có thu nhập trung bình thấp như giai đoạn hiện nay để đảm bảo tính bền vững.`,
            `B. Phấn đấu đưa Việt Nam trở thành quốc gia dẫn đầu về xuất khẩu nông sản trên toàn thế giới vào năm 2045 tới.`,
            `C. Duy trì ổn định mô hình tăng trưởng dựa trên việc khai thác tài nguyên và nhân công giá rẻ sẵn có hiện nay.`,
            `D. Trở thành nước phát triển, thu nhập cao... sánh vai với các cường quốc năm châu.`,
        ],
        answer: "D. Trở thành nước phát triển, thu nhập cao... sánh vai với các cường quốc năm châu.",
    },
    {
        question: ` Đại hội XIV của Đảng xác định mục tiêu tổng quát đến năm 2030 là gì?`,
        options: [
            `A. Trở thành nước phát triển, thu nhập cao.`,
            `B. Trở thành trung tâm công nghiệp của ASEAN.`,
            `C. Trở thành nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao.`,
            `D. Hoàn thành công nghiệp hóa theo hướng hiện đại.`,
        ],
        answer: "C. Trở thành nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao.",
    },
    {
        question: ` Đại hội XIV của Đảng xác định tốc độ tăng trưởng GDP bình quân giai đoạn 2026 - 2030 phấn đấu đạt bao nhiêu?`,
        options: [`A. Từ 9%/năm trở lên.`, `B. 8%/năm.`, `C. 7%/năm.`, `D. Từ 10% năm trở lên.`],
        answer: "D. Từ 10% năm trở lên.",
    },
    {
        question: ` Văn kiện Đại hội lần thứ XIV của Đảng đề ra chỉ tiêu GDP bình quân đầu người đến năm 2030 là bao nhiêu?`,
        options: [
            `A. GDP bình quân đầu người đến năm 2030 đạt khoảng 8.500 USD.`,
            `B. Phấn đấu đưa mức GDP bình quân đầu người của cả nước đạt khoảng từ 4.500 USD đến mức 5.000 USD hiện nay.`,
            `C. Quyết tâm phấn đấu đạt mức thu nhập bình quân 15.000 USD để sớm gia nhập nhóm các nước phát triển nhất.`,
            `D. Duy trì mức thu nhập bình quân hiện tại là 3.500 USD nhằm giữ vững các ưu thế về nhân công giá rẻ cạnh tranh.`,
        ],
        answer: "A. GDP bình quân đầu người đến năm 2030 đạt khoảng 8.500 USD.",
    },
    {
        question: ` Văn kiện Đại hội lần thứ XIV của Đảng đề ra chỉ tiêu tỷ trọng kinh tế số trong GDP đến năm 2030 là bao nhiêu?`,
        options: [
            `A. Đưa tỷ trọng của nền kinh tế số đạt được ở mức khoảng 15% tổng sản phẩm quốc nội của toàn bộ quốc gia ta.`,
            `B. Tỉ trọng kinh tế số đạt khoảng 30% GDP.`,
            `C. Phấn đấu đưa nền kinh tế số chiếm tỷ trọng 50% GDP nhằm thay thế hoàn toàn cho nền kinh tế nông nghiệp cũ.`,
            `D. Nền kinh tế số chỉ cần đạt mức tỷ trọng 10% là đã đủ để hiện đại hóa tất cả các ngành dịch vụ công cơ bản ta.`,
        ],
        answer: "B. Tỉ trọng kinh tế số đạt khoảng 30% GDP.",
    },
    {
        question: ` Báo cáo chính trị tại Đại hội XIV của Đảng nhấn mạnh phương châm bảo vệ Tổ quốc như thế nào?`,
        options: [
            `A. Bảo vệ từ sớm, từ xa, từ khi nước chưa nguy.`,
            `B. Chủ động phòng ngừa, sẵn sàng xử lý các tình huống.`,
            `C. Kết hợp chặt chẽ quốc phòng với kinh tế.`,
            `D. Giữ vững ổn định chính trị - xã hội.`,
        ],
        answer: "A. Bảo vệ từ sớm, từ xa, từ khi nước chưa nguy.",
    },
    {
        question: ` Đại hội XIV của Đảng xác định công cuộc phòng, chống tham nhũng với tinh thần như thế nào?`,
        options: [
            `A. Không có vùng cấm, không có ngoại lệ.`,
            `B. Kiên trì, thận trọng, làm từng bước vững chắc.`,
            `C. Tập trung vào những lĩnh vực nhạy cảm.`,
            `D. Kết hợp giữa giáo dục và xử lý nghiêm.`,
        ],
        answer: "A. Không có vùng cấm, không có ngoại lệ.",
    },
    {
        question: ` Báo cáo chính trị tại Đại hội XIV của Đảng đặc biệt đề cao tinh thần nào của cán bộ, đảng viên?`,
        options: [
            `A. Chủ động, sáng tạo trong thực hiện nhiệm vụ.`,
            `B. Chấp hành nghiêm kỷ luật của Đảng.`,
            `C. Tận tụy, trách nhiệm với công việc.`,
            `D. Nêu gương và trách nhiệm trước Nhân dân.`,
        ],
        answer: "A. Chủ động, sáng tạo trong thực hiện nhiệm vụ.",
    },
    {
        question: ` Văn kiện Đại hội lần thứ XIV của Đảng xác định vai trò của kinh tế tư nhân như thế nào?`,
        options: [
            `A. Kinh tế tư nhân xác định chỉ là lực lượng bổ trợ và phải chịu sự điều hành hoàn toàn từ phía các kinh tế nhà nước ta.`,
            `B. Lực lượng kinh tế tư nhân bắt buộc phải được quốc hữu hóa nhằm tập trung toàn bộ sức mạnh cho các đột phá chiến lược.`,
            `C. Phát triển kinh tế tư nhân là một động lực quan trọng nhất của nền kinh tế.`,
            `D. Nhà nước chỉ thực hiện khuyến khích các doanh nghiệp tư nhân nhỏ, tuyệt đối không cho phép phát triển tập đoàn lớn.`,
        ],
        answer: "C. Phát triển kinh tế tư nhân là một động lực quan trọng nhất của nền kinh tế.",
    },
    {
        question: ` Văn kiện Đại hội lần thứ XIV của Đảng đề ra chỉ tiêu về tỷ lệ lao động qua đào tạo có bằng cấp đến năm 2030 là bao nhiêu?`,
        options: [
            `A. Tỷ lệ của lực lượng lao động đã qua đào tạo và có bằng cấp chứng chỉ chuyên môn đạt được ở mức từ 10 - 15%.`,
            `B. Tỉ lệ lao động qua đào tạo có bằng cấp, chứng chỉ đạt 35 - 40%`,
            `C. Quyết tâm phấn đấu đạt 100% lực lượng lao động đều phải có bằng cấp đại học trở lên để đáp ứng kinh tế tri thức.`,
            `D. Tỷ lệ lao động đã qua đào tạo xác định không quan trọng bằng việc duy trì số lượng lớn lao động thủ công giá rẻ.`,
        ],
        answer: "B. Tỉ lệ lao động qua đào tạo có bằng cấp, chứng chỉ đạt 35 - 40%",
    },
    {
        question: ` Văn kiện Đại hội lần thứ XIV của Đảng đề ra yêu cầu gì về giáo dục ngoại ngữ trong trường học?`,
        options: [
            `A. Tiếp tục thực hiện duy trì tiếng Anh là một môn học hoàn toàn tự chọn và không bắt buộc đối với tất cả học sinh vùng sâu ta.`,
            `B. Nâng cao năng lực ngoại ngữ của học sinh, sinh viên, đưa tiếng Anh trở thành ngôn ngữ thứ hai trong trường học.`,
            `C. Thực hiện thay thế hoàn toàn tiếng Anh bằng các ngôn ngữ của các nước láng giềng nhằm mục tiêu thúc đẩy giao thương biên giới.`,
            `D. Nhà nước chỉ thực hiện đào tạo ngoại ngữ cho đội ngũ sinh viên ngành ngoại giao và du lịch, các ngành khác hoàn toàn không cần.`,
        ],
        answer: "B. Nâng cao năng lực ngoại ngữ của học sinh, sinh viên, đưa tiếng Anh trở thành ngôn ngữ thứ hai trong trường học.",
    },
    {
        question: ` Văn kiện Đại hội lần thứ XIV của Đảng đề ra định hướng gì về giáo dục kỹ năng số cho trẻ em?`,
        options: [
            `A. Nhà nước thực hiện cấm trẻ em bậc mầm non tiếp xúc với tất cả thiết bị điện tử nhằm bảo vệ thị lực và sự phát triển tự nhiên.`,
            `B. Đưa giáo dục kỹ năng số, trí tuệ nhân tạo vào hệ thống giáo dục quốc dân ngay từ chương trình giáo dục mầm non.`,
            `C. Các kỹ năng số xác định chỉ được bắt đầu giảng dạy khi các học sinh đã chính thức bước vào bậc đại học và bậc sau đại học.`,
            `D. Việc thực hiện giáo dục kỹ năng số cho các trẻ em xác định là nhiệm vụ của tất cả các trung tâm tin học tư nhân có thu phí.`,
        ],
        answer: "B. Đưa giáo dục kỹ năng số, trí tuệ nhân tạo vào hệ thống giáo dục quốc dân ngay từ chương trình giáo dục mầm non.",
    },
    {
        question: ` Văn kiện Đại hội lần thứ XIV của Đảng đề ra định hướng gì về đổi mới căn bản, toàn diện giáo dục?`,
        options: [
            `A. Thực hiện chuyển dịch mạnh mẽ từ giáo dục công lập sang mô hình giáo dục tư thục hoàn toàn nhằm mục tiêu giảm gánh nặng ngân sách.`,
            `B. Chuyển mạnh quá trình giáo dục từ chủ yếu trang bị kiến thức sang phát triển toàn diện năng lực, thể lực và phẩm chất.`,
            `C. Hệ thống giáo dục chỉ cần tập trung vào việc luyện thi tất cả các chứng chỉ quốc tế nhằm mục tiêu cho các học sinh đi du học định cư.`,
            `D. Thực hiện quay trở lại hoàn toàn mô hình giáo dục khoa bảng phong kiến cũ nhằm giữ gìn tất cả các đạo đức tôn sư trọng đạo dân tộc.`,
        ],
        answer: "B. Chuyển mạnh quá trình giáo dục từ chủ yếu trang bị kiến thức sang phát triển toàn diện năng lực, thể lực và phẩm chất.",
    },
    {
        question: ` Văn kiện Đại hội lần thứ XIV của Đảng đề ra yêu cầu gì về công tác xây dựng Đảng về đạo đức?`,
        options: [
            `A. Thực hiện nghiêm chuẩn mực đạo đức cách mạng... đề cao trách nhiệm nêu gương của cán bộ, đảng viên.`,
            `B. Đạo đức của đội ngũ cán bộ xác định là chuyện cá nhân và Đảng tuyệt đối không nên đưa vào tất cả quy định mang tính bắt buộc thực hiện hiện nay.`,
            `C. Đạo đức của cán bộ xác định được đánh giá một cách chủ yếu thông qua tất cả số lượng tài sản và sự giàu có thực tế của gia đình cán bộ lãnh đạo đó.`,
            `D. Công tác xây dựng đạo đức Đảng thực chất là việc tổ chức tất cả cuộc thi kể chuyện và các sáng tác văn học về tất cả tấm gương đạo đức trong lịch sử.`,
        ],
        answer: "A. Thực hiện nghiêm chuẩn mực đạo đức cách mạng... đề cao trách nhiệm nêu gương của cán bộ, đảng viên.",
    },
    {
        question: ` Văn kiện Đại hội lần thứ XIV của Đảng đề ra nhiệm vụ gì về đổi mới công tác cán bộ?`,
        options: [
            `A. Nhà nước chỉ thực hiện bổ nhiệm tất cả những người có mối quan hệ họ hàng thân thiết với lãnh đạo đương nhiệm nhằm mục tiêu đảm bảo bí mật bộ máy.`,
            `B. Đổi mới mạnh mẽ công tác cán bộ, bảo đảm khách quan, dân chủ, thực chất, hiệu quả theo đúng chủ trương "có vào, có ra", "có lên, có xuống"`,
            `C. Thực hiện áp dụng chế độ cán bộ suốt đời và hoàn toàn không có bất kỳ quy định nào về việc miễn nhiệm hay cho các cán bộ yếu kém được phép từ chức.`,
            `D. Toàn bộ việc thực hiện bổ nhiệm các cán bộ hiện nay xác định hoàn toàn dựa trên tất cả số lượng bằng cấp và các chứng chỉ ngoại ngữ quốc tế của họ.`,
        ],
        answer: 'B. Đổi mới mạnh mẽ công tác cán bộ, bảo đảm khách quan, dân chủ, thực chất, hiệu quả theo đúng chủ trương "có vào, có ra", "có lên, có xuống"',
    },
    {
        question: ` Văn kiện Đại hội lần thứ XIV của Đảng đề ra giải pháp gì về kiểm soát quyền lực và phòng chống tham nhũng?`,
        options: [
            `A. Nhà nước thực hiện cho phép hành vi tham nhũng tồn tại ở một mức độ nhỏ nhằm mục tiêu bôi trơn tất cả hoạt động hành chính của bộ máy công quyền ta.`,
            `B. Thực hiện công tác kiểm soát quyền lực bằng phương pháp giao toàn bộ quyền lực quốc gia cho duy nhất một cá nhân nắm giữ một cách trọn đời hiện nay.`,
            `C. Thực hiện xóa bỏ hoàn toàn tất cả các cơ quan thanh tra kiểm tra nhằm mục tiêu tiết kiệm ngân sách và tránh các hành vi gây phiền hà cho đội ngũ cán bộ.`,
            `D. Thiết lập và vận hành hiệu quả cơ chế "không thể", "không dám", "không muốn", "không cần" tham nhũng.`,
        ],
        answer: 'D. Thiết lập và vận hành hiệu quả cơ chế "không thể", "không dám", "không muốn", "không cần" tham nhũng.',
    },
    {
        question: ` Văn kiện Đại hội lần thứ XIV của Đảng đề ra giải pháp gì về xử lý ô nhiễm môi trường tại các đô thị?`,
        options: [
            `A. Thực hiện di dời toàn bộ người dân ra khỏi tất cả các đô thị đang bị ô nhiễm nhằm mục tiêu để họ tự tìm kiếm nơi ở mới sạch sẽ và an toàn hơn.`,
            `B. Ô nhiễm môi trường xác định là cái giá tất yếu và bắt buộc phải trả cho quá trình phát triển nên hoàn toàn không cần tìm các cách khắc phục.`,
            `C. Nhà nước thực hiện cho phép tất cả các nhà máy được phát thải tự do vào không khí nếu các doanh nghiệp cam kết nộp đủ thuế bảo vệ môi trường.`,
            `D. Khắc phục cơ bản tình trạng ô nhiễm môi trường nghiêm trọng... đặc biệt là môi trường không khí ở Hà Nội, TP.HCM.`,
        ],
        answer: "D. Khắc phục cơ bản tình trạng ô nhiễm môi trường nghiêm trọng... đặc biệt là môi trường không khí ở Hà Nội, TP.HCM.",
    },
    {
        question: ` Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định mục tiêu chủ yếu về xây dựng Đảng bộ Quân đội là gì?`,
        options: [
            `A. Đảng bộ Quân đội trong sạch, vững mạnh.`,
            `B. Đảng bộ Quân đội trong sạch, vững mạnh mẫu mực, tiêu biểu.`,
            `C. Đảng bộ Quân đội trong sạch, vững mạnh toàn diện, mẫu mực, tiêu biểu.`,
            `D. Đảng bộ Quân đội trong sạch, vững mạnh tiêu biểu.`,
        ],
        answer: "C. Đảng bộ Quân đội trong sạch, vững mạnh toàn diện, mẫu mực, tiêu biểu.",
    },
    {
        question: ` Yêu cầu xuyên suốt đối với xây dựng Quân đội được xác định trong văn kiện Đại hội Đảng bộ Quân đội lần thứ XII là gì?`,
        options: [
            `A. Tuyệt đối trung thành với Tổ quốc, Đảng, Nhà nước và Nhân dân.`,
            `B. Sẵn sàng mở rộng hợp tác quốc phòng quốc tế.`,
            `C. Ưu tiên hiện đại hóa vũ khí, trang bị, nâng cao sức khỏe cho quân nhân.`,
            `D. Nâng cao tiềm lực kinh tế quốc phòng.`,
        ],
        answer: "A. Tuyệt đối trung thành với Tổ quốc, Đảng, Nhà nước và Nhân dân.",
    },
    {
        question: ` Xây dựng Đảng bộ Quân đội về chính trị nhằm mục tiêu gì?`,
        options: [
            `A. Giữ vững vai trò lãnh đạo tuyệt đối, trực tiếp về mọi mặt của Đảng.`,
            `B. Nâng cao năng lực quản lý hành chính quân sự.`,
            `C. Mở rộng quyền tự chủ của đơn vị.`,
            `D. Tăng cường phân cấp, phân rõ nhiệm vụ, trách nhiệm trong chỉ huy.`,
        ],
        answer: "A. Giữ vững vai trò lãnh đạo tuyệt đối, trực tiếp về mọi mặt của Đảng.",
    },
    {
        question: ` Đại hội Đảng bộ Quân đội lần thứ XII xác định công tác xây dựng Đảng bộ Quân đội về đạo đức nhấn mạnh yêu cầu nào?`,
        options: [
            `A. Kiểm soát chặt chẽ tài sản cá nhân.`,
            `B. Hoàn thiện quy trình bổ nhiệm cán bộ.`,
            `C. Mở rộng giám sát của quần chúng.`,
            `D. Nêu gương, tự soi, tự sửa của cán bộ, đảng viên.`,
        ],
        answer: "D. Nêu gương, tự soi, tự sửa của cán bộ, đảng viên.",
    },
    {
        question: ` Đại hội Đảng bộ Quân đội lần thứ XII xác định nguyên tắc kết hợp “xây” và “chống” trong xây dựng Đảng như thế nào?`,
        options: [
            `A. “Chống” là nhiệm vụ trọng tâm hàng đầu; “Xây” là cơ bản, lâu dài.`,
            `B. “Xây” và “chống” có vai trò ngang nhau.`,
            `C. Ưu tiên “chống” trong giai đoạn đầu.`,
            `D. “Xây” là cơ bản, lâu dài; “chống” là quan trọng, thường xuyên.`,
        ],
        answer: "D. “Xây” là cơ bản, lâu dài; “chống” là quan trọng, thường xuyên.",
    },
    {
        question: ` Văn kiện Đại hội Đảng bộ Quân đội lần thứ XII xác định đâu là phương châm huấn luyện được xác định trong nhiệm vụ, giải pháp chủ yếu?`,
        options: [
            `A. Nhanh chóng - Chính xác - Kịp thời.`,
            `B. Hiện đại - Chuyên sâu - Thực tế.`,
            `C. Toàn diện - Đột phá - Vững chắc.`,
            `D. Cơ bản - Thiết thực - Vững chắc.`,
        ],
        answer: "D. Cơ bản - Thiết thực - Vững chắc.",
    },
    {
        question: ` Trong xây dựng Đảng bộ Quân đội, nội dung nào được coi là "hạt nhân lãnh đạo toàn diện"?`,
        options: [
            `A. Các tổ chức quần chúng và hội đồng quân nhân.`,
            `B. Các cấp ủy, tổ chức đảng vững mạnh về chính trị.`,
            `C. Đội ngũ cán bộ chủ trì các cấp.`,
            `D. Hệ thống cơ quan chính trị trong toàn quân.`,
        ],
        answer: "B. Các cấp ủy, tổ chức đảng vững mạnh về chính trị.",
    },
    {
        question: ` Văn kiện Đại hội Đảng bộ Quân đội lần thứ XII xác định "Bộ tiêu chí xây dựng Quân đội hiện đại" bao gồm nội dung trọng tâm nào?`,
        options: [
            `A. Tăng số lượng quân nhân thường trực tại các vùng biên giới.`,
            `B. Ưu tiên tuyệt đối cho các lực lượng dân quân tự vệ.`,
            `C. Thay thế toàn bộ vũ khí cũ bằng vũ khí công nghệ cao. 68`,
            `D. Hoàn thành các dự án, đề án, chương trình về công nghiệp quốc phòng.`,
        ],
        answer: "D. Hoàn thành các dự án, đề án, chương trình về công nghiệp quốc phòng.",
    },
    {
        question: ` Văn kiện Đại hội Đảng bộ Quân đội lần thứ XII xác định mục tiêu về nhà che vũ khí, trang bị kỹ thuật đến năm 2030 là bao nhiêu?`,
        options: [`A. Bảo đảm 80%`, `B. Bảo đảm 90%`, `C. Bảo đảm 95%`, `D. Bảo đảm 100%`],
        answer: "D. Bảo đảm 100%",
    },
    {
        question: ` Văn kiện Đại hội Đảng bộ Quân đội lần thứ XII xác định phương hướng đến năm 2030, mục tiêu tỷ lệ quân số khỏe trong toàn quân phải đạt mức nào?`,
        options: [`A. Trên 95%`, `B. Trên 97%`, `C. Trên 98%`, `D. Trên 98,5%`],
        answer: "D. Trên 98,5%",
    },
    {
        question: ` Văn kiện Đại hội Đảng bộ Quân đội lần thứ XII xác định mục tiêu đề ra, tỷ lệ vi phạm kỷ luật của toàn quân phải được duy trì ở mức nào?`,
        options: [`A. Dưới 0,2%`, `B. Dưới 0,5%`, `C. Dưới 0,25%`, `D. Dưới 0,15%`],
        answer: "A. Dưới 0,2%",
    },
    {
        question: ` Văn kiện Đại hội Đảng bộ Quân đội lần thứ XII xác định hằng năm, mục tiêu có bao nhiêu % tổ chức đảng, cán bộ, đảng viên hoàn thành tốt và xuất sắc nhiệm vụ?`,
        options: [`A. Trên 80%`, `B. Trên 85%`, `C. Trên 90%`, `D. Trên 95%`],
        answer: "C. Trên 90%",
    },
    {
        question: ` Văn kiện Đại hội Đảng bộ Quân đội lần thứ XII đánh giá về công nghiệp quốc phòng, các loại vũ khí, trang bị kỹ thuật trang bị cho Quân đội hiện nay có bao nhiêu % là sản phẩm của các đề tài nghiên cứu khoa học?`,
        options: [`A. Trên 70%`, `B. Trên 75%`, `C. Trên 80%`, `D. Trên 85%`],
        answer: "C. Trên 80%",
    },
    {
        question: ` Đại hội Đảng bộ Quân đội lần thứ XII đặt ra yêu cầu đối với cán bộ, đảng viên trong giai đoạn mới là gì?`,
        options: [
            `A. Ưu tiên hoàn thành tốt nhiệm vụ chuyên môn.`,
            `B. Tập trung vào công tác quản lý.`,
            `C. Thích ứng nhanh với thay đổi tổ chức.`,
            `D. Càng giữ chức vụ cao càng phải gương mẫu, nêu gương.`,
        ],
        answer: "D. Càng giữ chức vụ cao càng phải gương mẫu, nêu gương.",
    },
    {
        question: ` Đại hội Đảng bộ Quân đội lần thứ XII xác định một trong những nhiệm vụ quan trọng về quốc phòng là gì?`,
        options: [
            `A. Mở rộng hợp tác an ninh khu vực.`,
            `B. Tăng cường hiện diện quân sự.`,
            `C. Bảo vệ vững chắc Tổ quốc Việt Nam xã hội chủ nghĩa.`,
            `D. Phát triển công nghiệp quốc phòng xuất khẩu.`,
        ],
        answer: "C. Bảo vệ vững chắc Tổ quốc Việt Nam xã hội chủ nghĩa.",
    },
    {
        question: ` Đâu là một trong những đặc điểm mới của "hình thái chiến tranh mới" được đề cập trong Văn kiện Đại hội Đảng bộ Quân đội lần thứ XII?`,
        options: [
            `A. Sử dụng vũ khí thô sơ để tiêu hao sinh lực địch trên diện rộng.`,
            `B. Chỉ tập trung vào tác chiến không gian mạng và bỏ qua thực địa.`,
            `C. Sử dụng sức mạnh quân sự tuyệt đối, chuyển trạng thái rất nhanh từ hòa bình sang chiến tranh.`,
            `D. Kéo dài thời gian chuẩn bị chiến đấu để tranh thủ sự ủng hộ quốc tế.`,
        ],
        answer: "C. Sử dụng sức mạnh quân sự tuyệt đối, chuyển trạng thái rất nhanh từ hòa bình sang chiến tranh.",
    },
    {
        question: ` Văn kiện Đại hội Đảng bộ Quân đội lần thứ XII xác định mục tiêu phát triển công nghiệp quốc phòng "tự chủ, tự lực, tự cường" gắn liền với yếu tố nào?`,
        options: [
            `A. Thu mua bản quyền sản xuất của nước ngoài.`,
            `B. Tăng tỷ lệ nội địa hóa các sản phẩm công nghiệp quốc phòng.`,
            `C. Chỉ sử dụng nguyên liệu sẵn có trong nước.`,
            `D. Không xuất khẩu sản phẩm quốc phòng ra nước ngoài.`,
        ],
        answer: "B. Tăng tỷ lệ nội địa hóa các sản phẩm công nghiệp quốc phòng.",
    },
    {
        question: ` Văn kiện Đại hội Đảng bộ Quân đội lần thứ XII xác định Quân đội ưu tiên làm chủ công nghệ nào trong lĩnh vực điện tử?`,
        options: [
            `A. Công nghệ lắp ráp tivi và thiết bị gia dụng.`,
            `B. Công nghệ sản xuất điện thoại thông minh tiêu dùng.`,
            `C. Công nghệ chíp bán dẫn.`,
            `D. Công nghệ sản xuất pin năng lượng mặt trời.`,
        ],
        answer: "C. Công nghệ chíp bán dẫn.",
    },
    {
        question: ` Văn kiện Đại hội Đảng bộ Quân đội lần thứ XII xác định chuyên gia trong lĩnh vực nào được ưu tiên thu hút, trọng dụng theo Đề án nhân tài?`,
        options: [
            `A. Quản trị kinh doanh và marketing.`,
            `B. Nghệ thuật biểu diễn và thể dục thể thao.`,
            `C. Máy bay, thiết bị không người lái, robot, trí tuệ nhân tạo.`,
            `D. Sư phạm quân sự và tâm lý học.`,
        ],
        answer: "C. Máy bay, thiết bị không người lái, robot, trí tuệ nhân tạo.",
    },
    {
        question: ` Tinh thần "7 dám" trong quản lý đội ngũ cán bộ bao gồm những gì?`,
        options: [
            `A. Dám nghĩ, dám nói, dám làm, dám chịu trách nhiệm, dám đổi mới, sáng tạo, dám đương đầu với khó khăn, thử thách và dám hành động vì lợi ích chung.`,
            `B. Dám chiến đấu, dám hy sinh, dám vượt khó, dám học tập, dám lao động, dám sáng tạo, dám hội nhập.`,
            `C. Dám đương đầu, dám quyết định, dám thực hiện, dám nhận lỗi, dám sửa đổi, dám tiến lên, dám thành công.`,
            `D. Dám từ bỏ, dám thay đổi, dám đột phá, dám cạnh tranh, dám đứng đầu, dám cống hiến, dám chia sẻ.`,
        ],
        answer: "A. Dám nghĩ, dám nói, dám làm, dám chịu trách nhiệm, dám đổi mới, sáng tạo, dám đương đầu với khó khăn, thử thách và dám hành động vì lợi ích chung.",
    },
    {
        question: ` Phương châm của Đại hội đại biểu Đảng bộ Viện Khoa học và Công nghệ quân sự lần thứ VI, nhiệm kỳ 2025 - 2030 là gì?`,
        options: [
            `A. Đoàn kết - Dân chủ - Trí tuệ - Phát triển.`,
            `B. Đoàn kết - Dân chủ - Trách nhiệm - Trí tuệ - Phát triển.`,
            `C. Đoàn kết - Kỷ cương - Đột phá - Phát triển.`,
            `D. Đoàn kết - Dân chủ - Kỷ cương - Đột phá - Phát triển.`,
        ],
        answer: "C. Đoàn kết - Kỷ cương - Đột phá - Phát triển.",
    },
    {
        question: ` Nghị quyết Đại hội đại biểu Đảng bộ Viện Khoa học và Công nghệ quân sự lần thứ VI, nhiệm kỳ 2025 - 2030 đánh giá hạn chế trong nhiệm kỳ 2020 - 2025 như thế nào?`,
        options: [
            `A. Lãnh đạo, chỉ đạo đề xuất giải pháp có tính đột phá, có tầm nhìn chiến lược trong định hướng nghiên cứu lâu dài chưa nhiều, chưa tương xứng với vị thế, tiềm lực của Viện.`,
            `B. Chưa có giải pháp đột phá trong nghiên cứu khoa học công nghệ quân sự.`,
            `C. Chưa có giải pháp lãnh đạo, chỉ đạo đẩy mạnh nghiên cứu các lĩnh vực mũi nhọn, công nghệ chiến lược.`,
        ],
        answer: "A. Lãnh đạo, chỉ đạo đề xuất giải pháp có tính đột phá, có tầm nhìn chiến lược trong định hướng nghiên cứu lâu dài chưa nhiều, chưa tương xứng với vị thế, tiềm lực của Viện.",
    },
    {
        question: ` Nghị quyết Đại hội đại biểu Đảng bộ Viện Khoa học và Công nghệ quân sự lần thứ VI, nhiệm kỳ 2025 - 2030 đã xác định một trong những chỉ tiêu chủ yếu trong giai đoạn 2025 - 2030 là gì?`,
        options: [
            `A. Có 10 nhóm nghiên cứu chuyên sâu trên các lĩnh vực khoa học công nghệ trọng điểm.`,
            `B. Có từ 5 đến 6 nhóm nghiên cứu chuyên sâu trên các lĩnh vực khoa học công nghệ trọng điểm.`,
            `C. Có từ 10 nhóm nghiên cứu chuyên sâu trên các lĩnh vực khoa học công nghệ trọng điểm.`,
            `D. Có 8 nhóm nghiên cứu chuyên sâu trên các lĩnh vực khoa học công nghệ trọng điểm.`,
        ],
        answer: "B. Có từ 5 đến 6 nhóm nghiên cứu chuyên sâu trên các lĩnh vực khoa học công nghệ trọng điểm.",
    },
    {
        question: ` Nghị quyết Đại hội đại biểu Đảng bộ Viện Khoa học và Công nghệ quân sự lần thứ VI, nhiệm kỳ 2025 - 2030 đã xác định một trong những chỉ tiêu chủ yếu trong giai đoạn 2025 - 2030 là gì?`,
        options: [
            `A. Số lượng đơn đăng ký sáng chế, văn bằng bảo hộ sáng chế tăng 20%; số lượng đơn được bảo hộ tăng 5%/năm.`,
            `B. Số lượng đơn đăng ký sáng chế, văn bằng bảo hộ sáng chế tăng 10%`,
            `C. Số lượng đơn đăng ký sáng chế, văn bằng bảo hộ sáng chế tăng 15%`,
            `D. Số lượng đơn đăng ký sáng chế, văn bằng bảo hộ sáng chế tăng 10%; số lượng đơn được bảo hộ tăng 10%/năm.`,
        ],
        answer: "A. Số lượng đơn đăng ký sáng chế, văn bằng bảo hộ sáng chế tăng 20%; số lượng đơn được bảo hộ tăng 5%/năm.",
    },
    {
        question: ` Nghị quyết Đại hội đại biểu Đảng bộ Viện Khoa học và Công nghệ quân sự lần thứ VI, nhiệm kỳ 2025 - 2030 đã xác định một trong những chỉ tiêu chủ yếu trong giai đoạn 2025 - 2030 là gì?`,
        options: [
            `A. Có 12 cán bộ được bổ nhiệm chức danh giáo sư, phó giáo sư; xét và đề nghị công nhận 100 nghiên cứu viên, 80 nghiên cứu viên chính, 20 nghiên cứu viên cao cấp.`,
            `B. Có 15 cán bộ được bổ nhiệm chức danh giáo sư, phó giáo sư; xét và đề nghị công nhận 90 nghiên cứu viên, 90 nghiên cứu viên chính, 15 nghiên cứu viên cao cấp.`,
            `C. Có từ 8 – 10 cán bộ được bổ nhiệm chức danh giáo sư, phó giáo sư; xét và đề nghị công nhận 80 nghiên cứu viên, 100 nghiên cứu viên chính, 25 nghiên cứu viên cao cấp.`,
            `D. Có 20 cán bộ được bổ nhiệm chức danh giáo sư, phó giáo sư; xét và đề nghị công nhận 110 nghiên cứu viên, 90 nghiên cứu viên chính, 20 nghiên cứu viên cao cấp.`,
        ],
        answer: "C. Có từ 8 – 10 cán bộ được bổ nhiệm chức danh giáo sư, phó giáo sư; xét và đề nghị công nhận 80 nghiên cứu viên, 100 nghiên cứu viên chính, 25 nghiên cứu viên cao cấp.",
    },
    {
        question: ` Nghị quyết Đại hội đại biểu Đảng bộ Viện Khoa học và Công nghệ quân sự lần thứ VI, nhiệm kỳ 2025 - 2030 đã xác định một trong những chỉ tiêu chủ yếu trong giai đoạn 2025 - 2030 là gì?`,
        options: [
            `A. 95% đơn vị đạt vững mạnh toàn diện, trong đó có 20% trở lên đạt "Mẫu mực, tiêu biểu".`,
            `B. 95% đơn vị đạt vững mạnh toàn diện, trong đó có 25% trở lên đạt "Mẫu mực, tiêu biểu"`,
            `C. 98,5% đơn vị đạt vững mạnh toàn diện, trong đó có 20% trở lên đạt "Mẫu mực, tiêu biểu"`,
            `D. 100% đơn vị đạt vững mạnh toàn diện, trong đó có 20% trở lên đạt "Mẫu mực, tiêu biểu"`,
        ],
        answer: 'D. 100% đơn vị đạt vững mạnh toàn diện, trong đó có 20% trở lên đạt "Mẫu mực, tiêu biểu"',
    },
    {
        question: ` Nghị quyết Đại hội đại biểu Đảng bộ Viện Khoa học và Công nghệ quân sự lần thứ VI, nhiệm kỳ 2025 - 2030 đã xác định một trong những chỉ tiêu chủ yếu trong giai đoạn 2025 - 2030 là gì?`,
        options: [
            `A. Hằng năm có 100% cấp ủy, tổ chức đảng xếp loại hoàn thành nhiệm vụ trở lên, trong đó có trên 95% cấp ủy, tổ chức đảng xếp loại hoàn thành tốt và xuất sắc nhiệm vụ.`,
            `B. Hằng năm có 95% cấp ủy, tổ chức đảng xếp loại hoàn thành nhiệm vụ trở lên, trong đó có trên 90% cấp ủy, tổ chức đảng xếp loại hoàn thành tốt và xuất sắc nhiệm vụ.`,
            `C. Hằng năm có 98,5% cấp ủy, tổ chức đảng xếp loại hoàn thành nhiệm vụ trở lên, trong đó có trên 90% cấp ủy, tổ chức đảng xếp loại hoàn thành tốt và xuất sắc nhiệm vụ.`,
            `D. Hằng năm có 90% cấp ủy, tổ chức đảng xếp loại hoàn thành nhiệm vụ trở lên, trong đó có trên 90% cấp ủy, tổ chức đảng xếp loại hoàn thành tốt và xuất sắc nhiệm vụ.`,
        ],
        answer: "A. Hằng năm có 100% cấp ủy, tổ chức đảng xếp loại hoàn thành nhiệm vụ trở lên, trong đó có trên 95% cấp ủy, tổ chức đảng xếp loại hoàn thành tốt và xuất sắc nhiệm vụ.",
    },
    {
        question: ` Nghị quyết Đại hội đại biểu Đảng bộ Viện Khoa học và Công nghệ quân sự lần thứ VI, nhiệm kỳ 2025 - 2030 đã xác định một trong những chỉ tiêu chủ yếu trong giai đoạn 2025 - 2030 là gì?`,
        options: [
            `A. Có 25% cán bộ nghiên cứu đủ trình độ ngoại ngữ làm việc trong môi trường quốc tế.`,
            `B. Có 10% cán bộ nghiên cứu đủ trình độ ngoại ngữ làm việc trong môi trường quốc tế.`,
            `B. Có 15% cán bộ nghiên cứu đủ trình độ ngoại ngữ làm việc trong môi trường quốc tế.`,
            `B. Có 20% cán bộ nghiên cứu đủ trình độ ngoại ngữ làm việc trong môi trường quốc tế.`,
        ],
        answer: "A. Có 25% cán bộ nghiên cứu đủ trình độ ngoại ngữ làm việc trong môi trường quốc tế.",
    },
    {
        question: ` Nghị quyết Đại hội đại biểu Đảng bộ Viện Khoa học và Công nghệ quân sự lần thứ VI, nhiệm kỳ 2025 - 2030 đã xác định một trong những chỉ tiêu chủ yếu trong giai đoạn 2025 - 2030 là gì?`,
        options: [
            `A. Có từ 4 đến 6 sản phẩm mới, tổ hợp vũ khí công nghệ cao mang tính chiến lược trang bị cho Quân đội; chuyển giao khoảng 250 - 300 chủng loại các sản phẩm mới cho các đơn vị; có trên 90% sản phẩm được hoàn thiện, đủ điều kiện sản xuất loạt “0” đưa vào trang bị, sử dụng thực tế tại đơn vị.`,
            `B. Có từ 5 đến 7 sản phẩm mới, tổ hợp vũ khí công nghệ cao mang tính chiến lược trang bị cho Quân đội; chuyển giao trên 300 chủng loại các sản phẩm mới cho`,
            `các đơn vị; có trên 80% sản phẩm được hoàn thiện, đủ điều kiện sản xuất loạt “0” đưa vào trang bị, sử dụng thực tế tại đơn vị.`,
            `C. Có từ 7 sản phẩm mới, tổ hợp vũ khí công nghệ cao mang tính chiến lược trang bị cho Quân đội; chuyển giao trên 300 chủng loại các sản phẩm mới cho các đơn vị; có trên 80% sản phẩm được hoàn thiện, đủ điều kiện sản xuất loạt “0” đưa vào trang bị, sử dụng thực tế tại đơn vị.`,
            `D. Có từ 6 đến 8 sản phẩm mới, tổ hợp vũ khí công nghệ cao mang tính chiến lược trang bị cho Quân đội; chuyển giao trên 300 chủng loại các sản phẩm mới cho các đơn vị; có trên 80% sản phẩm được hoàn thiện, đủ điều kiện sản xuất loạt “0” đưa vào trang bị, sử dụng thực tế tại đơn vị.`,
        ],
        answer: "A. Có từ 4 đến 6 sản phẩm mới, tổ hợp vũ khí công nghệ cao mang tính chiến lược trang bị cho Quân đội; chuyển giao khoảng 250 - 300 chủng loại các sản phẩm mới cho các đơn vị; có trên 90% sản phẩm được hoàn thiện, đủ điều kiện sản xuất loạt “0” đưa vào trang bị, sử dụng thực tế tại đơn vị.",
    },
    {
        question: ` Nghị quyết Đại hội đại biểu Đảng bộ Viện Khoa học và Công nghệ quân sự lần thứ VI, nhiệm kỳ 2025 - 2030 đã xác định những khâu đột phá nào trong giai đoạn 2025 - 2030?`,
        options: [
            `A. Chủ động tham mưu, đề xuất với Thủ trưởng BTTM, Thủ trưởng BQP về các sản phẩm chiến lược, công nghệ chiến lược và chuyển đổi số; tổ chức thực hiện thành công các đề tài, nhiệm vụ được giao bảo đảm đúng thời gian, chất lượng.`,
            `B. Tăng cường xây dựng chính quy, chấp hành kỷ luật, pháp luật.`,
            `C. Nâng cao chất lượng toàn diện đội ngũ cán bộ đáp ứng yêu cầu nhiệm vụ trong tình hình mới.`,
            `D. Cả 3 phương án trên.`,
        ],
        answer: "D. Cả 3 phương án trên.",
    },
    {
        question: ` Nội dung nào dưới đây được xác định trong “4 kiên định” của Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương Đảng về công tác chính trị, tư tưởng trong Đảng?`,
        options: [
            `A. Kiên định, vận dụng và phát triển sáng tạo lý luận đổi mới của Đảng.`,
            `B. Kiên định, vận dụng và phát triển sáng tạo đường lối đổi mới của Đảng.`,
            `C. Kiên định, vận dụng và phát triển sáng tạo đường lốỉ, chủ trương của Đảng.`,
            `D. Kiên định, vận dụng và phát triển sáng tạo chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh.`,
        ],
        answer: "D. Kiên định, vận dụng và phát triển sáng tạo chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh.",
    },
    {
        question: ` Nội dung nào dưới đây được xác định trong “4 kiên định” của Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương Đảng về công tác chính trị, tư tưởng trong Đảng?`,
        options: [
            `A. Kiên định các nguyên tắc hoạt động của Đảng.`,
            `B. Kiên định các nguyên tắc tổ chức của Đảng.`,
            `C. Kiên định các nguyên tắc tổ chức và hoạt động của Đảng.`,
            `D. Kiên định các nguyên tắc hoạt động và tổ chức của Đảng.`,
        ],
        answer: "C. Kiên định các nguyên tắc tổ chức và hoạt động của Đảng.",
    },
    {
        question: ` Nội dung nào dưới đây được xác định trong “4 kiên định” của Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương Đảng về công tác chính trị, tư tưởng trong Đảng?`,
        options: [
            `A. Kiên định đường lối đổi mới của Đảng.`,
            `B. Kiên định lý luận đường lối đổi mới của Đảng.`,
            `C. Kiên định lý luận về đường lối đổi mới của Đảng.`,
            `D. Kiên định lý luận đường lối đổi mới toàn diện của Đảng.`,
        ],
        answer: "A. Kiên định đường lối đổi mới của Đảng.",
    },
    {
        question: ` Nội dung nào dưới đây được xác định trong “4 kiên định” của Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương Đảng về công tác chính trị, tư tưởng trong Đảng?`,
        options: [
            `A. Kiên định mục tiêu độc lập dân tộc và chủ nghĩa cộng sản.`,
            `B. Kiên định mục tiêu độc lập dân tộc và chủ nghĩa xã hội.`,
            `C. Kiên định mục tiêu độc lập dân tộc và con đường đi lên chủ nghĩa xã hội.``,`,
        ],
        answer: "B. Kiên định mục tiêu độc lập dân tộc và chủ nghĩa xã hội.",
    },
    {
        question: ` Nội dung nào dưới đây được xác định trong 5 chuẩn mực “Bộ đội Cụ Hồ” thời kỳ mới theo Chỉ thị số 855-CT/QUTW ngày 12/8/2019 của Thường vụ Quân ủy Trung ương?`,
        options: [
            `A. Bản lĩnh chính trị kiên định, động cơ trong sáng.`,
            `B. Bản lĩnh vững vàng, động cơ trong sáng, trách nhiệm cao.`,
            `C. Bản lĩnh chính trị vững vàng, động cơ trong sáng, trách nhiệm cao.`,
            `D. Bản lĩnh chính trị tư tưởng vững vàng, trách nhiệm cao.`,
        ],
        answer: "C. Bản lĩnh chính trị vững vàng, động cơ trong sáng, trách nhiệm cao.",
    },
    {
        question: ` Nội dung nào dưới đây được xác định trong 5 chuẩn mực “Bộ đội Cụ Hồ” thời kỳ mới theo Chỉ thị số 855-CT/QUTW ngày 12/8/2019 của Thường vụ Quân ủy Trung ương?`,
        options: [
            `A. Phẩm chất đạo đức tốt, lối sống lành mạnh.`,
            `B. Phẩm chất đạo đức tốt, lối sống giản dị.`,
            `C. Phẩm chất đạo đức tốt, lối sống tốt.`,
            `D. Đạo đức, lối sống trong sạch, lành mạnh.`,
        ],
        answer: "D. Đạo đức, lối sống trong sạch, lành mạnh.",
    },
    {
        question: ` Nội dung nào dưới đây được xác định trong 5 chuẩn mực “Bộ đội Cụ Hồ” thời kỳ mới theo Chỉ thị số 855-CT/QUTW ngày 12/8/2019 của Thường vụ Quân ủy Trung ương?`,
        options: [
            `A. Có văn hóa, tri thức khoa học, năng lực, phương pháp, tác phong công tác tốt.`,
            `B. Có tri thức khoa học, trình độ quân sự, năng lực, phương pháp công tác và sức khỏe tốt đáp ứng yêu cầu nhiệm vụ.`,
            `C. Có văn hóa, tri thức khoa học, trình độ quân sự, năng lực, phương pháp, tác phong công tác và sức khỏe tốt đáp ứng yêu cầu nhiệm vụ.`,
            `D. Có tri thức khoa học, trình độ, năng lực, phương pháp, tác phong công tác và sức khỏe tốt đáp ứng yêu cầu nhiệm vụ.`,
        ],
        answer: "C. Có văn hóa, tri thức khoa học, trình độ quân sự, năng lực, phương pháp, tác phong công tác và sức khỏe tốt đáp ứng yêu cầu nhiệm vụ.",
    },
    {
        question: ` Nội dung nào dưới đây được xác định trong 5 chuẩn mực “Bộ đội Cụ Hồ” thời kỳ mới theo Chỉ thị số 855-CT/QUTW ngày 12/8/2019 của Thường vụ Quân ủy Trung ương?`,
        options: [
            `A. Thực hành dân chủ, kỷ luật tự giác, nghiêm minh.`,
            `B. Thực hành dân chủ tốt, kỷ luật tự giác.`,
            `C. Thực hành dân chủ tốt, kỷ luật nghiêm minh.`,
            `D. Thực hành dân chủ rộng rãi, kỷ luật tự giác.`,
        ],
        answer: "A. Thực hành dân chủ, kỷ luật tự giác, nghiêm minh.",
    },
    {
        question: ` Nội dung nào dưới đây được xác định trong 5 chuẩn mực “Bộ đội Cụ Hồ” thời kỳ mới theo Chỉ thị số 855-CT/QUTW ngày 12/8/2019 của Thường vụ Quân ủy Trung ương?`,
        options: [
            `A. Chăm lo xây dựng đoàn kết nội bộ tốt.`,
            `B. Chăm lo xây dựng đoàn kết nội bộ tốt; tôn trọng, giúp đỡ, gắn bó máu thịt với Nhân dân; có tinh thần quốc tế trong sáng.`,
            `C. Chăm lo xây dựng đoàn kết nội bộ tốt; luôn gắn bó máu thịt với Nhân dân.`,
            `D. Chăm lo xây dựng đoàn kết nội bộ tốt; giúp đỡ Nhân dân; có tinh thần quốc tế trong sáng.`,
        ],
        answer: "B. Chăm lo xây dựng đoàn kết nội bộ tốt; tôn trọng, giúp đỡ, gắn bó máu thịt với Nhân dân; có tinh thần quốc tế trong sáng.",
    },
    {
        question: ` Nội dung nào dưới đây được xác định trong 4 tiêu chuẩn xây dựng đơn vị điểm vững mạnh toàn diện “Mẫu mực, tiêu biểu” theo Chỉ thị số 79/CT- BQP ngày 22/7/2022 của Bộ trưởng Bộ Quốc phòng?`,
        options: [
            `A. Thực hiện nghiêm công tác xây dựng lực lượng; huấn luyện và giáo dục, đào tạo giỏi; duy trì nghiêm chế độ canh trực sẵn sàng chiến đấu.`,
            `B. Thực hiện nghiêm công tác xây dựng lực lượng; huấn luyện và giáo dục, đào tạo giỏi; duy trì nghiêm chế độ sẵn sàng chiến đấu.`,
            `C. Thực hiện nghiêm túc công tác tổ chức lực lượng; huấn luyện và đào tạo giỏi; duy trì nghiêm nền nếp, chế độ sẵn sàng chiến đấu.`,
            `D. Thực hiện nghiêm túc công tác xây dựng lực lượng; huấn luyện và đào tạo giỏi.`,
        ],
        answer: "C. Thực hiện nghiêm túc công tác tổ chức lực lượng; huấn luyện và đào tạo giỏi; duy trì nghiêm nền nếp, chế độ sẵn sàng chiến đấu.",
    },
    {
        question: ` Nội dung nào dưới đây được xác định trong 4 tiêu chuẩn xây dựng đơn vị điểm vững mạnh toàn diện “Mẫu mực, tiêu biểu” theo Chỉ thị số 79/CT- BQP ngày 22/7/2022 của Bộ trưởng Bộ Quốc phòng?`,
        options: [
            `A. Xây dựng nền nếp chính quy, quản lý kỷ luật tốt và đẩy mạnh cải cách hành chính quân sự.`,
            `B. Xây dựng nền nếp chính quy, quản lý kỷ luật tốt và đẩy mạnh cải cách hành chính.`,
            `C. Duy trì nghiêm nền nếp chính quy, quản lý kỷ luật tốt và đẩy mạnh chuyển đổi số.`,
            `D. Duy trì nghiêm nền nếp chính quy, quản lý kỷ luật tốt và đẩy mạnh cải cách hành chính quân sự, chuyển đổi số.`,
        ],
        answer: "A. Xây dựng nền nếp chính quy, quản lý kỷ luật tốt và đẩy mạnh cải cách hành chính quân sự.",
    },
    {
        question: ` Nội dung nào dưới đây được xác định trong chính sách quốc phòng “4 không” theo Sách trắng Quốc phòng Việt Nam năm 2019?`,
        options: [
            `A. Không liên minh quân sự; không liên kết với nước này để chống nước kia; không cho nước ngoài đặt căn cứ quân sự và sử dụng lãnh thổ để chống lại nước khác; không sử dụng vũ lực trong quan hệ quốc tế.`,
            `B. Không liên minh quân sự; không liên kết với nước này để chống nước kia; không cho nước ngoài đặt căn cứ quân sự và sử dụng lãnh thổ để chống lại nước khác; không sử dụng vũ lực và đe dọa sử dụng vũ lực trong quan hệ quốc tế.`,
            `C. Không tham gia liên minh quân sự; không liên kết với nước này để chống nước kia; không cho nước ngoài đặt căn cứ quân sự hoặc sử dụng lãnh thổ để chống lại nước khác; không sử dụng vũ lực hoặc đe dọa sử dụng vũ lực trong quan hệ quốc tế.`,
            `D. Không tham gia liên minh quân sự; không liên kết với nước này để chống nước kia; không cho nước ngoài đặt căn cứ quân sự để chống lại nước khác; không sử dụng vũ lực hoặc đe dọa sử dụng vũ lực trong quan hệ quốc tế.`,
        ],
        answer: "C. Không tham gia liên minh quân sự; không liên kết với nước này để chống nước kia; không cho nước ngoài đặt căn cứ quân sự hoặc sử dụng lãnh thổ để chống lại nước khác; không sử dụng vũ lực hoặc đe dọa sử dụng vũ lực trong quan hệ quốc tế.",
    },
    {
        question: ` Nội dung nào dưới đây được xác định trong chính sách quốc phòng “4 không” theo Sách trắng Quốc phòng Việt Nam năm 2019?`,
        options: [
            `A. Không cho nước ngoài đặt căn cứ quân sự hoặc sử dụng lãnh thổ để chống lại nước khác.`,
            `B. Không cho nước ngoài đặt căn cứ quân sự để chống lại nước khác.`,
            `C. Không cho nước ngoài sử dụng lãnh thổ trái phép để chống lại nước khác.`,
            `D. Không cho nước ngoài đặt căn cứ quân sự hoặc sử dụng lãnh thổ trái phép.`,
        ],
        answer: "A. Không cho nước ngoài đặt căn cứ quân sự hoặc sử dụng lãnh thổ để chống lại nước khác.",
    },
    {
        question: ` Nội dung nào dưới đây được xác định trong chính sách quốc phòng “4 không” theo Sách trắng Quốc phòng Việt Nam năm 2019?`,
        options: [
            `A. Không sử dụng và đe dọa sử dụng vũ lực trong quan hệ quốc tế.`,
            `B. Không sử dụng vũ lực hoặc đe dọa sử dụng vũ lực trong quan hệ quốc tế.`,
            `C. Sẵn sàng sử dụng vũ lực hoặc đe dọa sử dụng vũ lực trong quan hệ quốc tế khi cần thiết.`,
        ],
        answer: "B. Không sử dụng vũ lực hoặc đe dọa sử dụng vũ lực trong quan hệ quốc tế.",
    },
    {
        question: ` Nội dung nào dưới đây được xác định trong chính sách quốc phòng “4 không” theo Sách trắng Quốc phòng Việt Nam năm 2019?`,
        options: [
            `A. Không tham gia liên minh quân sự với các nước khác.`,
            `B. Không liên minh quân sự với các nước khác.`,
            `C. Không tham gia liên minh quân sự.`,
            `D. Không tham gia liên minh quân sự để chống lại nước khác.`,
        ],
        answer: "C. Không tham gia liên minh quân sự.",
    },
    {
        question: ` Nội dung nào dưới đây được xác định trong chính sách quốc phòng “4 không” theo Sách trắng Quốc phòng Việt Nam năm 2019?`,
        options: [
            `A. Không liên kết quân sự với nước này để chống nước khác.`,
            `B. Không liên kết với nước này để chống nước kia.`,
            `C. Không liên kết quân sự với nước này để xâm lược nước kia.`,
            `D. Không liên kết quân sự với nước này để chống nước kia.`,
        ],
        answer: "B. Không liên kết với nước này để chống nước kia.",
    },
    {
        question: ` Chủ đề Phong trào thi đua Quyết thắng năm 2026 là gì?`,
        options: [
            `A. “Đoàn kết, kỷ cương, sáng tạo, quyết thắng”.`,
            `B. “Đoàn kết, kỷ cương, đột phá, sáng tạo, quyết thắng”.`,
            `C. “Đoàn kết, kỷ cương, đột phá, quyết thắng”.`,
            `D. “Đoàn kết, kỷ cương, đột phá, chủ động, sáng tạo, quyết thắng”.`,
        ],
        answer: "B. “Đoàn kết, kỷ cương, đột phá, sáng tạo, quyết thắng”.",
    },
    {
        question: ` Tư tưởng chỉ đạo xuyên suốt của Phong trào thi đua Quyết thắng năm 2026 là gì?`,
        options: [
            `A. “Tăng cường đoàn kết, giữ vững kỷ cương, quyết tâm đột phá, đổi mới sáng tạo, thực hiện tốt “2 kiên định, 2 đẩy mạnh, 2 ngăn ngừa” và phương châm “5 vững”, yêu cầu “3 giỏi” hoàn thành xuất sắc nhiệm vụ.`,
            `B. “Tăng cường đoàn kết, giữ vững kỷ cương, quyết tâm đột phá, đổi mới sáng tạo, thực hiện tốt “2 kiên định, 2 đẩy mạnh, 2 ngăn ngừa” và “5 vững”.`,
            `C. “Đẩy mạnh đoàn kết, giữ vững kỷ cương, quyết tâm đột phá, đổi mới sáng tạo, thực hiện tốt “2 kiên định, 2 đẩy mạnh, 2 ngăn ngừa” và phương châm “5 vững”, hoàn thành xuất sắc nhiệm vụ”.`,
            `D. “Giữ vững đoàn kết, tăng cường kỷ cương, quyết tâm đột phá, đổi mới sáng tạo, thực hiện tốt “2 kiên định, 2 đẩy mạnh, 2 ngăn ngừa” và phương châm “5 vững”, hoàn thành xuất sắc nhiệm vụ”.`,
        ],
        answer: "A. “Tăng cường đoàn kết, giữ vững kỷ cương, quyết tâm đột phá, đổi mới sáng tạo, thực hiện tốt “2 kiên định, 2 đẩy mạnh, 2 ngăn ngừa” và phương châm “5 vững”, yêu cầu “3 giỏi” hoàn thành xuất sắc nhiệm vụ.",
    },
    {
        question: ` Quy định số 332-QĐ/TW ngày 24/6/2025 của Bộ Chính trị, quy định Đảng ủy từ cấp trên trực tiếp cơ sở đến cấp trực thuộc Quân ủy Trung ương có chức năng nào sau đây?`,
        options: [
            `A. Lãnh đạo tuyệt đối, toàn diện các đơn vị thuộc quyền.`,
            `B. Lãnh đạo mọi mặt các đơn vị thuộc quyền.`,
            `C. Lãnh đạo tuyệt đối, trực tiếp các đơn vị thuộc quyền.``,`,
        ],
        answer: "B. Lãnh đạo mọi mặt các đơn vị thuộc quyền.",
    },
    {
        question: ` Quy định số 332-QĐ/TW ngày 24/6/2025 của Bộ Chính trị, quy định quyền hạn của Đảng ủy từ cấp trên trực tiếp cơ sở đến cấp trực thuộc Quân ủy Trung ương như thế nào?`,
        options: [
            `A. Quyết định thành lập, sáp nhập, chia tách, giải thể tổ chức đảng cấp dưới trực tiếp.`,
            `B. Quyết định thành lập, sáp nhập, chia tách, giải thể tổ chức đảng trong đảng bộ.`,
            `C. Quyết định thành lập, sáp nhập, chia tách tổ chức đảng trong đảng bộ.,`,
        ],
        answer: "A. Quyết định thành lập, sáp nhập, chia tách, giải thể tổ chức đảng cấp dưới trực tiếp.",
    },
    {
        question: ` Quy định số 332-QĐ/TW ngày 24/6/2025 của Bộ Chính trị, quy định tổ chức cơ sở đảng có chức năng nào sau đây?`,
        options: [
            `A. Lãnh đạo tuyệt đối, trực tiếp mọi mặt hoạt động trong đơn vị.`,
            `B. Lãnh đạo toàn diện, trực tiếp mọi mặt hoạt động trong đơn vị.`,
            `C. Lãnh đạo mọi mặt hoạt động trong đơn vị.`,
        ],
        answer: "C. Lãnh đạo mọi mặt hoạt động trong đơn vị.",
    },
    {
        question: ` Trong phương hướng, chỉ đạo của đồng chí Tổng Bí thư về "2 kiên định, 2 đẩy mạnh, 2 ngăn ngừa", nội dung "2 ngăn ngừa" hướng tới điều gì?`,
        options: [
            `A. Ngăn ngừa nguy cơ chiến tranh, xung đột và mọi biểu hiện suy thoái về tư tưởng chính trị, đạo đức, lối sống, “tự diễn biến”, “tự chuyển hóa”.`,
            `B. Ngăn ngừa thiên tai và dịch bệnh diễn biến bất thường.`,
            `C. Ngăn ngừa việc mua sắm vũ khí lãng phí và không hiệu quả.`,
            `D. Ngăn ngừa sự can thiệp của các tổ chức quốc tế vào nội bộ quốc phòng.`,
        ],
        answer: "A. Ngăn ngừa nguy cơ chiến tranh, xung đột và mọi biểu hiện suy thoái về tư tưởng chính trị, đạo đức, lối sống, “tự diễn biến”, “tự chuyển hóa”.",
    },
    {
        question: ` Trong phương hướng, chỉ đạo của đồng chí Tổng Bí thư về "2 kiên định, 2 đẩy mạnh, 2 ngăn ngừa", nội dung "2 kiên định" hướng tới điều gì?`,
        options: [
            `A. Kiên định mục tiêu kinh tế thị trường và kiên định hội nhập quốc tế`,
            `B. Kiên định đường lối quân sự, quốc phòng của Đảng; kiên định xây dựng Quân đội vững mạnh về chính trị.`,
            `C. Kiên định tự chủ kinh tế và kiên định không tham gia diễn tập quốc tế.`,
        ],
        answer: "B. Kiên định đường lối quân sự, quốc phòng của Đảng; kiên định xây dựng Quân đội vững mạnh về chính trị.",
    },
    {
        question: ` Trong phương hướng, chỉ đạo của đồng chí Tổng Bí thư về "2 kiên định, 2 đẩy mạnh, 2 ngăn ngừa", nội dung "2 đẩy mạnh" hướng tới điều gì?`,
        options: [
            `A. Công nghiệp hóa và giáo dục, đại học hiện đại.`,
            `B. Đẩy mạnh xây dựng Quân đội nhân dân cách mạng, chính quy, tinh nhuệ, hiện đại; đẩy mạnh hội nhập quốc tế và đối ngoại quốc phòng.`,
            `C. Sản xuất vũ khí và hợp tác quốc phòng.`,
            `D. Xây dựng nền công nghiệp quốc phòng hiện đại và đẩy mạnh đối ngoại quốc phòng.`,
        ],
        answer: "B. Đẩy mạnh xây dựng Quân đội nhân dân cách mạng, chính quy, tinh nhuệ, hiện đại; đẩy mạnh hội nhập quốc tế và đối ngoại quốc phòng.",
    },
    {
        question: ` Đồng chí cho biết, phương châm “5 vững” theo chỉ đạo của đồng chí Tổng Bí thư, là gì?`,
        options: [
            `A. Chính trị vững - Kỷ luật vững - Công nghệ vững - Nghệ thuật quân sự vững - Đời sống bộ đội vững.`,
            `B. Chính trị vững - Kỷ luật vững - Công nghệ vững - Quân sự vững - Đời sống bộ đội vững.`,
            `C. Chính trị vững - Kỷ luật vững - Công nghệ vững - Nghệ thuật quân sự vững - Văn hóa vững.`,
            `D. Chính trị vững - Kỷ luật vững - Công nghệ vững - Quân sự vững - kinh tế vững.`,
        ],
        answer: "A. Chính trị vững - Kỷ luật vững - Công nghệ vững - Nghệ thuật quân sự vững - Đời sống bộ đội vững.",
    },
    {
        question: ` Đồng chí cho biết nội dung "3 giỏi" theo chỉ đạo của đồng chí Tổng Tham mưu trưởng Quân đội nhân dân Việt Nam?`,
        options: [
            `A. Tham mưu giỏi - Huấn luyện giỏi - Quản lý điều hành giỏi.`,
            `B. Tham mưu giỏi - Chỉ huy điều hành giỏi - Huấn luyện và điều lệnh giỏi.`,
            `C. Tham mưu giỏi - Chỉ huy điều hành giỏi - Hiệp đồng tác chiến giỏi.`,
            `D. Tham mưu giỏi - Huấn luyện giỏi - Chỉ huy giỏi.`,
        ],
        answer: "B. Tham mưu giỏi - Chỉ huy điều hành giỏi - Huấn luyện và điều lệnh giỏi.",
    },
    {
        question: ` Quy định số 207-QĐ/TW, ngày 26/7/2026 của Ban Chấp hành Trung ương Đảng quy định về nội dung gì?`,
        options: [
            `A. Quy định về những điều đảng viên không được làm.`,
            `B. Quy định về xây dựng và thực hiện quy chế dân chủ cơ sở tại nơi làm việc trong doanh nghiệp Quân đội.`,
            `C. Quy định về tổ chức và hoạt động của Hội đồng quân nhân trong QĐND VN`,
            `D. Quy định về hoạt động tổ chức quần chúng trong QĐND Việt Nam.`,
        ],
        answer: "A. Quy định về những điều đảng viên không được làm.",
    },
    {
        question: ` Quy định số 207-QĐ/TW, ngày 26/7/2026 của Ban Chấp hành Trung ương Đảng được ban hành để thay thế cho Quy định nào trước đó?`,
        options: [
            `A. Quy định số 47-QĐ/TW, ngày 20/12/2021.`,
            `B. Quy định số 37-QĐ/TW, ngày 25/10/2021.`,
            `C. Quy định số 102-QĐ/TW, ngày 15/11/2017.`,
            `D. Quy định số 69-QĐ/TW, ngày 06/7/2022.`,
        ],
        answer: "B. Quy định số 37-QĐ/TW, ngày 25/10/2021.",
    },
    {
        question: ` Quy định số 207-QĐ/TW, ngày 26/7/2026 gồm có bao nhiêu điều quy định về các hành vi đảng viên không được làm?`,
        options: [`A. 15 điều`, `B. 17 điều`, `C. 19 điều`, `D. 21 điều`],
        answer: "C. 19 điều",
    },
    {
        question: ` Nội dung Điều 14 của Quy định 207-QĐ/TW ngày 26/7/2026 của Ban Chấp hành Trung ương Đảng là gì?`,
        options: [
            `A. Thực hành tiết kiệm, chống lãng phí.`,
            `B. Đấu tranh chống tham nhũng, tiêu cực.`,
            `C. Tặng, nhận quà dưới mọi hình thức để tác động đến tổ chức, người có trách nhiệm dẫn đến việc quyết định sai, có lợi ích riêng cho bản thân hoặc cá nhân, tổ chức, cơ quan, doanh nghiệp.`,
            `D. Cấm sử dụng rượu, bia trước, trong giờ làm việc.`,
        ],
        answer: "C. Tặng, nhận quà dưới mọi hình thức để tác động đến tổ chức, người có trách nhiệm dẫn đến việc quyết định sai, có lợi ích riêng cho bản thân hoặc cá nhân, tổ chức, cơ quan, doanh nghiệp.",
    },
    {
        question: ` Nội dung nào dưới đây được xác định trong các điều của Quy định 207-QĐ/TW ngày 26/7/2026 của Ban Chấp hành Trung ương Đảng?`,
        options: [
            `A. Nói, viết, làm trái hoặc không thực hiện Cương lĩnh chính trị, Điều lệ Đảng, nghị quyết, chỉ thị, kết luận, quy chế, quy định của các cấp ủy Đảng.`,
            `B. Nói, viết, làm trái hoặc không thực hiện chủ trương, quy định của Đảng, pháp luật của Nhà nước; làm những việc mà pháp luật không cho phép.`,
            `C. Nói, viết, làm trái chủ trương, quy định của Đảng, pháp luật của Nhà nước.`,
            `D. Nói, viết, làm trái với Cương lĩnh chính trị, Điều lệ Đảng, nghị quyết, chỉ thị, kết luận, quy chế, quy định của Đảng.`,
        ],
        answer: "B. Nói, viết, làm trái hoặc không thực hiện chủ trương, quy định của Đảng, pháp luật của Nhà nước; làm những việc mà pháp luật không cho phép.",
    },
    {
        question: ` Quy chế 1123/QC-VKHCNQS ngày 03/7/2025 của Viện Khoa học và Công nghệ quân sự, quy định thế nào về chế độ trực chỉ huy?`,
        options: [
            `A. Chế độ trực chỉ huy được tổ chức từ cấp Viện KH&CNQS đến cấp phòng nghiên cứu.`,
            `B. Chế độ trực chỉ huy được tổ chức từ cấp Viện KH&CNQS đến đầu mối trực thuộc Viện.`,
            `C. Chế độ trực chỉ huy được tổ chức ở cấp Viện KH&CNQS.``,`,
        ],
        answer: "A. Chế độ trực chỉ huy được tổ chức từ cấp Viện KH&CNQS đến cấp phòng nghiên cứu.",
    },
    {
        question: ` Quy chế 1123/QC-VKHCNQS ngày 03/7/2025 của Viện KH-CN quân sự, quy định thế nào về thành phần giao ban quân sự - chính trị tháng?`,
        options: [
            `A. Thủ trưởng Viện KH&CNQS; trưởng, phó (bí thư) các cơ quan, đơn vị trực thuộc Viện; Trợ lý Kế hoạch tổng hợp (Phòng Tham mưu); 01 trợ lý thuộc Tạp chí nghiên cứu KHCNQS và Ban Tài chính (nếu Tổng Biên tập, Trưởng ban Tài chính vắng); thành phần khác do Giám đốc Viện triệu tập.`,
            `B. Thủ trưởng Viện KH&CNQS; trưởng, phó (bí thư) các cơ quan, đơn vị trực thuộc Viện; Trợ lý Kế hoạch tổng hợp (Phòng Tham mưu)`,
            `C. Thủ trưởng Viện KH&CNQS; trưởng, phó (bí thư) các cơ quan, đơn vị trực thuộc Viện; Trợ lý Kế hoạch tổng hợp, Trợ lý Chính trị các đơn vị; thành phần khác do Giám đốc Viện triệu tập.`,
            `D. Thủ trưởng Viện KH&CNQS; trưởng, phó (bí thư) các cơ quan trực thuộc Viện; thành phần khác do Giám đốc Viện triệu tập.`,
        ],
        answer: "A. Thủ trưởng Viện KH&CNQS; trưởng, phó (bí thư) các cơ quan, đơn vị trực thuộc Viện; Trợ lý Kế hoạch tổng hợp (Phòng Tham mưu); 01 trợ lý thuộc Tạp chí nghiên cứu KHCNQS và Ban Tài chính (nếu Tổng Biên tập, Trưởng ban Tài chính vắng); thành phần khác do Giám đốc Viện triệu tập.",
    },
    {
        question: ` Theo Quy định số 500-QĐ/QUTW ngày 10/4/2026 của Quân ủy Trung ương, nguyên tắc quy hoạch mỗi chức danh chỉ huy, quản lý số lượng như thế nào?`,
        options: [
            `A. Không quá 05 cán bộ.`,
            `B. Không quá 04 cán bộ.`,
            `C. Không quá 03 cán bộ.`,
            `D. Không quá 02 cán bộ.`,
        ],
        answer: "C. Không quá 03 cán bộ.",
    },
    {
        question: ` Theo Quy định số 500-QĐ/QUTW ngày 10/4/2026 của Quân ủy Trung ương, nguyên tắc một cán bộ được quy hoạch bao nhiêu chức danh chỉ huy, quản lý ở cùng cấp?`,
        options: [
            `A. Không quá 04 chức danh.`,
            `B. Không quá 03 chức danh.`,
            `C. Không quá 02 chức danh.`,
            `D. Cả 03 phương án đều sai.`,
        ],
        answer: "B. Không quá 03 chức danh.",
    },
    {
        question: ` Theo Quy định số 500-QĐ/QUTW ngày 10/4/2026 của Quân ủy Trung ương, phải quy hoạch chức danh cán bộ nào dưới đây?`,
        options: [
            `A. Tất cả các chức danh có trong biên chế.`,
            `B. Các chức danh lãnh đạo, chỉ huy từ cấp Tiểu đoàn và tương đương trở lên.`,
            `C. Các chức danh chỉ huy, quản lý từ cấp đại đội và tương đương trở lên, gồm cấp trưởng, cấp phó đơn vị; chính ủy (chính trị viên), phó chính ủy (chính trị viên phó); cấp trưởng, cấp phó các cục, phòng, khoa, ban trực thuộc từ cấp trung đoàn và tương đương trở lên.`,
            `D. Các chức danh chỉ huy, quản lý từ cấp trung đội và tương đương trở lên.`,
        ],
        answer: "C. Các chức danh chỉ huy, quản lý từ cấp đại đội và tương đương trở lên, gồm cấp trưởng, cấp phó đơn vị; chính ủy (chính trị viên), phó chính ủy (chính trị viên phó); cấp trưởng, cấp phó các cục, phòng, khoa, ban trực thuộc từ cấp trung đoàn và tương đương trở lên.",
    },
    {
        question: ` Theo Quy định số 500-QĐ/QUTW ngày 10/4/2026 của Quân ủy Trung ương, bổ nhiệm cán bộ giữ các chức vụ chỉ huy, quản lý thời hạn như thế nào?`,
        options: [
            `A. 03 năm (36 tháng).`,
            `B. 04 năm (48 tháng)`,
            `C. 05 năm (60 tháng)`,
            `D. Không quy định thời hạn.`,
        ],
        answer: "C. 05 năm (60 tháng)",
    },
    {
        question: ` Theo Quy định số 500-QĐ/QUTW ngày 10/4/2026 của Quân ủy Trung ương, khi hết thời hạn giữ chức vụ phải xem xét bổ nhiệm lại hoặc không bổ nhiệm lại, nhưng thời hạn giữ một chức vụ như thế nào?`,
        options: [
            `A. Không quá 05 năm (60 tháng).`,
            `B. Không quá 10 năm (120 tháng)`,
            `C. Không quá 15 năm (180 tháng)`,
            `D. Không quy định thời hạn.`,
        ],
        answer: "B. Không quá 10 năm (120 tháng)",
    },
    {
        question: ` Theo Quy định số 500-QĐ/QUTW ngày 10/4/2026 của Quân ủy Trung ương, việc rà soát, bổ sung, thay thế nhân sự trong quy hoạch được thực hiện với tần suất nào?`,
        options: [
            `A. 06 tháng một lần.`,
            `B. Hằng năm.`,
            `C. Hai năm một lần.`,
            `D. Khi có yêu cầu của cấp có thẩm quyền.`,
        ],
        answer: "B. Hằng năm",
    },
    {
        question: ` Theo quy định của Luật Sĩ quan Quân đội nhân dân Việt Nam hiện nay, quy định hạn tuổi cao nhất của sĩ quan phục vụ tại ngũ theo cấp bậc quân hàm như thế nào?`,
        options: [
            `A. Cấp úy: 46; Thiếu tá: 50; Trung tá: 52; Thượng tá: 55; Đại tá 58; cấp Tướng: 60.`,
            `B. Cấp úy: 48; Thiếu tá: 50; Trung tá: 52; Thượng tá: 56; Đại tá 58; cấp Tướng: 60.`,
            `C. Cấp úy: 50; Thiếu tá: 52; Trung tá: 54; Thượng tá: 56; Đại tá 58; cấp Tướng: 60.`,
            `D. Cấp úy: 50; Thiếu tá: 52; Trung tá 55; Thượng tá: 57; Đại tá 58; cấp Tướng: 62.`,
        ],
        answer: "C. Cấp úy: 50; Thiếu tá: 52; Trung tá: 54; Thượng tá: 56; Đại tá 58; cấp Tướng: 60.",
    },
    {
        question: ` Theo quy định của Luật Sĩ quan Quân đội nhân dân Việt Nam hiện nay, thẩm quyền quy định cấp bậc quân hàm cao nhất đối với chức vụ, chức danh của sĩ quan là cấp tá, cấp úy như thế nào?`,
        options: [
            `A. Do Quân ủy Trung ương quyết định.`,
            `B. Do Ban Thường vụ Quân ủy Trung ương quyết định.`,
            `C. Do Bộ trưởng Bộ Quốc phòng quyết định.`,
            `D. Do Tổng Tham mưu trưởng quyết định.`,
        ],
        answer: "C. Do Bộ trưởng Bộ Quốc phòng quyết định.",
    },
    {
        question: ` Theo quy định của Luật Sĩ quan Quân đội nhân dân Việt Nam hiện nay, quan hệ cấp bậc, chức vụ của sĩ quan như thế nào?`,
        options: [
            `A. Sĩ quan có cấp bậc quân hàm cao hơn là cấp trên của sĩ quan có cấp bậc quân hàm thấp hơn.`,
            `B. Sĩ quan có cấp bậc quân hàm cao hơn là cấp trên của sĩ quan có cấp bậc quân hàm thấp hơn; trường hợp sĩ quan có chức vụ cao hơn nhưng có cấp bậc quân hàm bằng hoặc thấp hơn cấp bậc quân hàm của sĩ quan thuộc quyền thì sĩ quan có chức vụ cao hơn là chỉ huy.`,
            `C. Sĩ quan có cấp bậc quân hàm cao hơn và chức vụ cao hơn là chỉ huy.`,
            `D. Sĩ quan có chức vụ cao hơn và có cấp bậc quân hàm bằng cấp bậc quân hàm của sĩ quan thuộc quyền thì sĩ quan có chức vụ cao hơn là chỉ huy.`,
        ],
        answer: "B. Sĩ quan có cấp bậc quân hàm cao hơn là cấp trên của sĩ quan có cấp bậc quân hàm thấp hơn; trường hợp sĩ quan có chức vụ cao hơn nhưng có cấp bậc quân hàm bằng hoặc thấp hơn cấp bậc quân hàm của sĩ quan thuộc quyền thì sĩ quan có chức vụ cao hơn là chỉ huy.",
    },
    {
        question: ` Theo quy định của Luật Sĩ quan Quân đội nhân dân Việt Nam hiện nay, khi Quân đội có nhu cầu, sĩ quan có đủ phẩm chất về chính trị, đạo đức, năng lực, sức khỏe và tự nguyện thì có thể được kéo dài tuổi phục vụ tại ngũ thời gian như thế nào?`,
        options: [`A. Không quá 02 năm.`, `B. Không quá 03 năm.`, `C. Không quá 04 năm.`, `D. Không quá 05 năm.`],
        answer: "D. Không quá 05 năm.",
    },
    {
        question: ` Thông tư 06/2025/TT-BQP ngày 26/01/2025 của Bộ Quốc phòng, quy định về đối tượng, tiêu chuẩn đào tạo cán bộ Quân đội nhân dân Việt Nam, quy định cấp bậc cán bộ đi đào tạo dài hạn cấp trung đoàn như thế nào?`,
        options: [
            `A. Cấp bậc Thượng úy trở lên.`,
            `B. Cấp bậc Đại úy.`,
            `C. Cấp bậc Thiếu tá trở lên.`,
            `D. Cấp bậc Đại úy trở lên.`,
        ],
        answer: "D. Cấp bậc Đại úy trở lên.",
    },
    {
        question: ` Thông tư 06/2025/TT-BQP ngày 26/01/2025 của Bộ Quốc phòng, quy định đối tượng cán bộ công tác ở cơ quan cấp chiến lược đủ điều kiện đi đào tạo ngắn hạn chỉ huy tham mưu chiến dịch, chiến lược tại Học viện Quốc phòng như thế nào?`,
        options: [
            `A. Phó Cục trưởng, Trưởng phòng, Phó trưởng phòng có chức năng chỉ đạo toàn quân.`,
            `B. Trưởng phòng, Phó trưởng phòng, trợ lý cơ quan có chức năng chỉ đạo toàn quân; đã qua chỉ huy, quản lý cấp trung, lữ đoàn và tương đương trở lên.`,
            `C. Trưởng phòng, Phó trưởng phòng, Trợ lý.`,
            `D. Trợ lý cơ quan có chức năng chỉ đạo toàn quân trở lên.`,
        ],
        answer: "B. Trưởng phòng, Phó trưởng phòng, trợ lý cơ quan có chức năng chỉ đạo toàn quân; đã qua chỉ huy, quản lý cấp trung, lữ đoàn và tương đương trở lên.",
    },
    {
        question: ` Thông tư số 56/2025/TT-BQP ngày 26/6/2025 của Bộ Quốc phòng, quy định thời gian nghỉ phép năm của sĩ quan như thế nào?`,
        options: [
            `A. Dưới 15 năm công tác được nghỉ 20 ngày; từ đủ 15 năm đến dưới 25 năm công tác được nghỉ 25 ngày; từ đủ 25 năm công tác trở lên được nghỉ 30 ngày (không tính ngày đi đường).`,
            `B. Dưới 15 năm công tác được nghỉ 15 ngày; từ đủ 15 năm đến dưới 25 năm công tác được nghỉ 20 ngày; từ đủ 25 năm công tác trở lên được nghỉ 35 ngày (không tính ngày đi đường)`,
            `C. Dưới 15 năm công tác được nghỉ 15 ngày; từ đủ 15 năm công tác trở lên được nghỉ 30 ngày (không tính ngày đi đường)`,
            `D. Dưới 15 năm công tác được nghỉ 15 ngày; từ đủ 15 năm đến dưới 25 năm công tác được nghỉ 25 ngày; từ đủ 25 năm công tác trở lên được nghỉ 35 ngày (không tính ngày đi đường).`,
        ],
        answer: "A. Dưới 15 năm công tác được nghỉ 20 ngày; từ đủ 15 năm đến dưới 25 năm công tác được nghỉ 25 ngày; từ đủ 25 năm công tác trở lên được nghỉ 30 ngày (không tính ngày đi đường).",
    },
    {
        question: ` Thông tư số 56/2025/TT-BQP ngày 26/6/2025 của Bộ Quốc phòng quy định thời gian được nghỉ chuẩn bị hưu của sĩ quan như thế nào?`,
        options: [
            `A. Từ đủ 15 năm đến dưới 20 năm công tác được nghỉ 6 tháng; từ đủ 20 năm đến dưới 25 năm công tác được nghỉ 9 tháng; từ đủ 25 năm công tác trở lên được nghỉ 12 tháng.`,
            `B. Từ đủ 15 năm đến dưới 20 năm công tác được nghỉ 9 tháng; Từ đủ 20 năm công tác trở lên được nghỉ 12 tháng.`,
            `C. Từ đủ 15 năm đến dưới 25 năm công tác được nghỉ 9 tháng; từ đủ 25 năm công tác trở lên được nghỉ 12 tháng.`,
            `D. Từ đủ 15 năm đến dưới 20 năm công tác được nghỉ 10 tháng; Từ đủ 20 năm đến dưới 25 năm công tác được nghỉ 11 tháng; từ đủ 25 năm công tác trở lên được nghỉ 18 tháng.`,
        ],
        answer: "A. Từ đủ 15 năm đến dưới 20 năm công tác được nghỉ 6 tháng; từ đủ 20 năm đến dưới 25 năm công tác được nghỉ 9 tháng; từ đủ 25 năm công tác trở lên được nghỉ 12 tháng.",
    },
    {
        question: ` Nghị quyết số 05-NQ/TW ngày 07/4/2026 của Ban Chấp hành Trung ương Đảng về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật của Đảng đánh giá về hạn chế trong thực hiện giám sát thường xuyên như thế nào?`,
        options: [
            `A. Giám sát thường xuyên còn là khâu yếu, không ít vi phạm chậm được phát hiện.`,
            `B. Giám sát thường xuyên còn là khâu yếu.`,
            `C. Giám sát thường xuyên còn là khâu yếu, rất nhiều vi phạm chậm được phát hiện.`,
        ],
        answer: "A. Giám sát thường xuyên còn là khâu yếu, không ít vi phạm chậm được phát hiện.",
    },
    {
        question: ` Nghị quyết số 05-NQ/TW ngày 07/4/2026 của Ban Chấp hành Trung ương Đảng về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật của Đảng xác định bao nhiêu nhiệm vụ, giải pháp?`,
        options: [`A. 5 nhiệm vụ, giải pháp.`, `B. 6 nhiệm vụ, giải pháp.`, `C. 7 nhiệm vụ, giải pháp.`, ``],
        answer: "B. 6 nhiệm vụ, giải pháp.",
    },
    {
        question: ` Nghị quyết số 624-NQ/QUTW ngày 02/6/2026 của Quân ủy Trung ương về lãnh đạo công tác kiểm tra, giám sát và kỷ luật của Đảng trong Đảng bộ Quân đội nhiệm kỳ 2025 - 2030 xác định bao nhiêu nhiệm vụ giải pháp?`,
        options: [`A. 4 nhiệm vụ, giải pháp.`, `B. 5 nhiệm vụ, giải pháp.`, `C. 6 nhiệm vụ, giải pháp.`],
        answer: "B. 5 nhiệm vụ, giải pháp.",
    },
    {
        question: ` Nhiệm vụ, giải pháp thứ nhất được nêu trong Nghị quyết số 624- NQ/QUTW ngày 02/6/2026 của Quân ủy Trung ương về lãnh đạo công tác kiểm tra, giám sát và kỷ luật của Đảng trong Đảng bộ Quân đội nhiệm kỳ 2025 - 2030 là gì?`,
        options: [
            `A. Nâng cao nhận thức trách nhiệm của cấp ủy, tổ chức đảng, ủy ban kiểm tra các cấp về công tác kiểm tra, giám sát và kỷ luật của Đảng.`,
            `B. Nâng cao nhận thức trách nhiệm của cán bộ, đảng viên về công tác kiểm tra, giám sát và kỷ luật của Đảng.`,
            `C. Nâng cao nhận thức trách nhiệm của cấp ủy, tổ chức đảng, ủy ban kiểm tra các cấp, cán bộ, đảng viên về công tác kiểm tra, giám sát và kỷ luật của Đảng.,`,
        ],
        answer: "C. Nâng cao nhận thức trách nhiệm của cấp ủy, tổ chức đảng, ủy ban kiểm tra các cấp, cán bộ, đảng viên về công tác kiểm tra, giám sát và kỷ luật của Đảng.",
    },
    {
        question: ` Theo Quy định số 21-QĐ/TW ngày 11/4/2026 của Ban Chấp hành Trung ương về công tác kiểm tra, giám sát và kỷ luật của Đảng, giám sát của Đảng được hiểu như thế nào?`,
        options: [
            `A. Giám sát của Đảng là việc tổ chức đảng đánh giá hoạt động nhằm kịp thời nhắc nhở để cấp ủy, tổ chức đảng cấp dưới và đảng viên được giám sát chấp hành nghiêm chủ trương, quy định của Đảng.`,
            `B. Giám sát của Đảng là việc tổ chức đảng quan sát, theo dõi, nắm bắt, xem xét, đánh giá, kết luận hoạt động nhằm kịp thời nhắc nhở để cấp ủy, tổ chức đảng cấp dưới và đảng viên được giám sát chấp hành nghiêm chủ trương, quy định của Đảng, pháp luật của Nhà nước và khắc phục, sửa chữa khuyết điểm, vi phạm (nếu có).`,
            `C. Giám sát của Đảng là việc tổ chức đảng đánh giá, kết luận hoạt động nhằm kịp thời nhắc nhở để cấp ủy, tồ chức đảng cấp dưới và đảng viên được giám sát chấp hành nghiêm pháp luật của Nhà nước.`,
        ],
        answer: "B. Giám sát của Đảng là việc tổ chức đảng quan sát, theo dõi, nắm bắt, xem xét, đánh giá, kết luận hoạt động nhằm kịp thời nhắc nhở để cấp ủy, tổ chức đảng cấp dưới và đảng viên được giám sát chấp hành nghiêm chủ trương, quy định của Đảng, pháp luật của Nhà nước và khắc phục, sửa chữa khuyết điểm, vi phạm (nếu có).",
    },
    {
        question: ` Theo Quy định số 21-QĐ/TW ngày 11/4/2026 của Ban Chấp hành Trung ương về công tác kiểm tra, giám sát và kỷ luật của Đảng, cơ quan kiểm soát tài sản, thu nhập của Đảng được xác định như thế nào?`,
        options: [
            `A. Cơ quan kiểm soát tài sản, thu nhập của Đảng là cơ quan nhân sự các cấp.`,
            `B. Cơ quan kiểm soát tài sản, thu nhập của Đảng là ủy ban kiểm tra cấp ủy cấp cơ sở trở lên.`,
            `C. Cơ quan kiểm soát tài sản, thu nhập của Đảng là ủy ban kiểm tra cấp ủy cấp trên trực tiếp cơ sở trở lên.`,
            ``,
        ],
        answer: "C. Cơ quan kiểm soát tài sản, thu nhập của Đảng là ủy ban kiểm tra cấp ủy cấp trên trực tiếp cơ sở trở lên.",
    },
    {
        question: ` Theo Quy định số 21-QĐ/TW ngày 11/4/2026 của Ban Chấp hành Trung ương về công tác kiểm tra, giám sát và kỷ luật của Đảng, quyết định kỷ luật tổ chức đảng, đảng viên vi phạm có hiệu lực khi nào?`,
        options: [
            `A. Có hiệu lực kể từ ngày ký (trừ quyết định kỷ luật thuộc thẩm quyền của chi bộ).`,
            `B. Có hiệu lực kể từ ngày công bố (trừ quyết định kỷ luật thuộc thẩm quyền của chi bộ).`,
            `C. Có hiệu lực sau 10 ngày.,`,
        ],
        answer: "A. Có hiệu lực kể từ ngày ký (trừ quyết định kỷ luật thuộc thẩm quyền của chi bộ).",
    },
    {
        question: ` Theo Quy định số 21-QĐ/TW ngày 11/4/2026 của Ban Chấp hành Trung ương về công tác kiểm tra, giám sát và kỷ luật của Đảng, nội dung tố cáo phải giải quyết đối với tổ chức đảng là gì?`,
        options: [
            `A. Những nội dung liên quan đến việc chấp hành chủ trương, quy định của Đảng, pháp luật của nhà nước, các nguyên tắc tổ chức và hoạt động của Đảng; đoàn kết nội bộ.`,
            `B. Những nội dung liên quan đến việc chấp hành các nguyên tắc tổ chức và hoạt động của Đảng; đoàn kết nội bộ.`,
            `C. Những nội dung liên quan đến việc chấp hành pháp luật của nhà nước.,`,
        ],
        answer: "A. Những nội dung liên quan đến việc chấp hành chủ trương, quy định của Đảng, pháp luật của nhà nước, các nguyên tắc tổ chức và hoạt động của Đảng; đoàn kết nội bộ.",
    },
    {
        question: ` Theo Quy định số 21-QĐ/TW ngày 11/4/2026 của Ban Chấp hành Trung ương về công tác kiểm tra, giám sát và kỷ luật của Đảng, nội dung tố cáo phải giải quyết đối với đảng viên là gì?`,
        options: [
            `A. Những nội dung liên quan đến tiêu chuẩn đảng viên, tiêu chuẩn cấp ủy viên và thực hiện nhiệm vụ đảng viên.`,
            `B. Việc chấp hành chủ trương, quy định của Đảng, pháp luật của Nhà nước; về nguyên tắc tổ chức và sinh hoạt đảng, thực hiện chức trách, nhiệm vụ, quyền hạn và phẩm chất, đạo đức lối sống của cán bộ, đảng viên; về thực hiện trách nhiệm nêu gương; về “tự diễn biến”, “tự chuyển hóa”.`,
            `C. Tất cả các phương án trên.,`,
        ],
        answer: "C. Tất cả các phương án trên.",
    },
    {
        question: ` Theo Quy định số 21-QĐ/TW ngày 11/4/2026 của Ban Chấp hành Trung ương về công tác kiểm tra, giám sát và kỷ luật của Đảng, thời hạn đình chỉ sinh hoạt đảng đối với đảng viên (kể cả cấp ủy viên), đình chỉ hoạt động của tổ chức đảng được quy định như thế nào?`,
        options: [
            `A. 60 ngày, được gia hạn 1 lần nhưng không quá 30 ngày.`,
            `B. 90 ngày, được gia hạn 1 lần nhưng không quá 30 ngày.`,
            `C. 120 ngày, được gia hạn 1 lần nhưng không quá 30 ngày.`,
        ],
        answer: "B. 90 ngày, được gia hạn 1 lần nhưng không quá 30 ngày.`",
    },
    {
        question: ` Các hình thức kỷ luật đối với tổ chức đảng có vi phạm?`,
        options: [
            `A. Khiển trách, cảnh cáo, giải tán, giải thể.`,
            `B. Khiển trách, cảnh cáo, giải tán, phê bình.`,
            `C. Khiển trách, cảnh cáo, giải tán.`,
        ],
        answer: "C. Khiển trách, cảnh cáo, giải tán.",
    },
    {
        question: ` Các hình thức kỷ luật đối đảng viên chính thức có vi phạm?`,
        options: [
            `A. Khiển trách, cảnh cáo, cách chức, khai trừ.`,
            `B. Khiển trách, cảnh cáo, khai trừ.`,
            `C. Khiển trách, cảnh cáo, cách chức, xóa tên.,`,
        ],
        answer: "A. Khiển trách, cảnh cáo, cách chức, khai trừ.",
    },
    {
        question: ` Theo đồng chí, đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về tình thương yêu đồng chí, đồng đội trong Quân đội hiện nay cần thực hiện giải pháp nào?`,
        options: [
            `A. Tăng cường sự lãnh đạo, chỉ đạo của cấp ủy, tổ chức đảng, chính ủy, chính trị viên, người chỉ huy và cơ quan chính trị các cấp.`,
            `B. Tạo sự thống nhất, đoàn kết trong cấp ủy, chỉ huy.`,
            `C. Thường xuyên tạo sự thống nhất trong cấp ủy, chỉ huy nhằm nâng cao năng lực lãnh đạo và sức chiến đấu.`,
            `D. Cả ba đáp án trên.`,
        ],
        answer: "A. Tăng cường sự lãnh đạo, chỉ đạo của cấp ủy, tổ chức đảng, chính ủy, chính trị viên, người chỉ huy và cơ quan chính trị các cấp.",
    },
    {
        question: ` Yêu cầu đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về tình thương yêu đồng chí, đồng đội trong Quân đội hiện nay là gì?`,
        options: [
            `A. Quán triệt sâu sắc, nắm vững quan điểm của Đảng, tư tưởng Hồ Chí Minh về tình thương yêu đồng chí, đồng đội trong quân đội hiện nay`,
            `B. Tiến hành thường xuyên, liên tục, thực chất, hiệu quả việc đẩy mạnh học tập và làm theo tư tưởng Hồ Chí Minh về tình thương yêu đồng chí, đồng đội trong quân đội hiện nay`,
            `C. Kết hợp chặt chẽ giữa “xây” và “chống”, lấy “xây” là chính trong đẩy mạnh học tập và làm theo tư tưởng Hồ Chí Minh về tình thương yêu đồng chí, đồng đội trong quân đội hiện nay`,
            `D. Cả ba phương án trên.`,
        ],
        answer: "D. Cả ba phương án trên.",
    },
    {
        question: ` Đồng chí cho biết, Luật Phòng thủ dân sự năm 2023 gồm bao nhiêu chương, điều?`,
        options: [`A. 06 chương, 65 điều`, `B. 05 chương, 65 điều`, `C. 07 chương, 55 điều`, `D. 05 chương, 51 điều`],
        answer: "C. 07 chương, 55 điều",
    },
    {
        question: ` Đồng chí cho biết, Luật Phòng thủ dân sự năm 2023 quy định có bao nhiêu cấp độ phòng thủ dân sự?`,
        options: [`A. Có 3 cấp độ`, `B. Có 4 cấp độ`, `C. Có 5 cấp độ`, `D. Có 6 cấp độ`],
        answer: "A. Có 3 cấp độ",
    },
    {
        question: ` Luật Tình trạng khẩn cấp năm 2025 chính thức có hiệu lực thi hành từ thời điểm nào?`,
        options: [`A. 01/01/2026`, `B. 01/5/2026`, `C. 01/7/2026`, `D. 01/6/2026`],
        answer: "C. 01/7/2026",
    },
    {
        question: ` Nguyên tắc hoạt động trong tình trạng khẩn cấp được Luật Tình trạng khẩn cấp năm 2025 quy định như thế nào?`,
        options: [
            `A. Ưu tiên huy động tối đa mọi nguồn lực để xử lý tình huống trong mọi trường hợp.`,
            `B. Chỉ áp dụng các biện pháp đặc biệt sau khi hoàn thành đầy đủ thủ tục hành chính.`,
            `C. Đặt yêu cầu phát triển kinh tế song song với bảo đảm an ninh, quốc phòng trong mọi hoạt động.`,
            `D. Tuân thủ hiến pháp, pháp luật Việt Nam và điều ước quốc tế mà nước Cộng hòa xã hội chủ nghĩa Việt Nam là thành viên.`,
        ],
        answer: "D. Tuân thủ hiến pháp, pháp luật Việt Nam và điều ước quốc tế mà nước Cộng hòa xã hội chủ nghĩa Việt Nam là thành viên.",
    },
    {
        question: ` Theo Luật Tình trạng khẩn cấp năm 2025, lực lượng nào thuộc lực lượng nòng cốt tham gia ứng phó tình trạng khẩn cấp?`,
        options: [
            `A. Lực lượng dân quân tự vệ, dân phòng và các tổ chức xã hội tham gia hoạt động cứu trợ nhân đạo trên địa bàn.`,
            `B. Lực lượng bảo vệ an ninh cơ sở, lực lượng tình nguyện và các tổ chức xã hội có liên quan đến công tác cứu hộ.`,
            `C. Quân đội nhân dân, Công an nhân dân, Dân quân tự vệ, lực lượng tham gia bảo vệ an ninh, trật tự ở cơ sở; lực lượng của các Bộ, ngành và địa phương.`,
            `D. Lực lượng quân sự địa phương, kiểm lâm, kiểm ngư và các tổ chức kinh tế được huy động tham gia ứng phó.`,
        ],
        answer: "C. Quân đội nhân dân, Công an nhân dân, Dân quân tự vệ, lực lượng tham gia bảo vệ an ninh, trật tự ở cơ sở; lực lượng của các Bộ, ngành và địa phương.",
    },
    {
        question: ` Theo quy định của Luật Tham gia lực lượng gìn giữ hòa bình của liên hợp quốc năm 2025, nguyên tắc lãnh đạo cao nhất khi Việt Nam tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc là gì?`,
        options: [
            `A. Đặt dưới sự điều hành hoàn toàn của Hội đồng Bảo an Liên hợp quốc.`,
            `B. Đặt dưới sự chỉ huy trực tiếp của Phái bộ Liên hợp quốc tại nước sở tại.`,
            `C. Đặt dưới sự lãnh đạo tuyệt đối, trực tiếp về mọi mặt của Đảng Cộng sản Việt Nam.`,
            `D. Do Bộ Quốc phòng quyết định phối hợp với nước bạn.`,
        ],
        answer: "C. Đặt dưới sự lãnh đạo tuyệt đối, trực tiếp về mọi mặt của Đảng Cộng sản Việt Nam.",
    },
    {
        question: ` Theo quy định của Luật Tham gia lực lượng gìn giữ hòa bình của liên hợp quốc năm 2025, nguyên tắc đối ngoại nào sau đây không thuộc các nguyên tắc tham gia lực lượng gìn giữ hòa bình Liên hợp quốc của Việt Nam?`,
        options: [
            `A. Bảo đảm độc lập, tự chủ, hòa bình, hữu nghị, hợp tác, phát triển.`,
            `B. Tôn trọng độc lập, chủ quyền, bình đẳng, toàn vẹn lãnh thổ và không can thiệp vào công việc nội bộ của các quốc gia`,
            `C. Tuân thủ Hiến pháp và pháp luật nước Cộng hòa xã hội chủ nghĩa Việt Nam; phù hợp với Hiến chương Liên hợp quốc, pháp luật quốc tế, điều ước quốc tế mà nước Cộng hòa xã hội chủ nghĩa Việt Nam là thành viên.`,
            `D. Sẵn sàng tham gia vào các hoạt động vũ lực khi có xung đột.`,
        ],
        answer: "D. Sẵn sàng tham gia vào các hoạt động vũ lực khi có xung đột.",
    },
    {
        question: ` Luật Thanh tra năm 2025 chính thức bắt đầu có hiệu lực thi hành từ ngày, tháng, năm nào?`,
        options: [`A. 01/01/2025`, `B. 01/6/2025`, `C. 01/7/2025`, `D. 01/01/2026`],
        answer: "C. 01/7/2025",
    },
    {
        question: ` Theo Luật Thanh tra năm 2025, nguyên tắc nào sau đây không thuộc nguyên tắc hoạt động thanh tra?`,
        options: [
            `A. Tuân theo pháp luật, dân chủ, khách quan.`,
            `B. Công khai, chính xác, kịp thời.`,
            `C. Giữ bí mật tuyệt đối mọi thông tin trong thanh tra.`,
            `D. Không cản trở hoạt động bình thường của đối tượng thanh tra`,
        ],
        answer: "C. Giữ bí mật tuyệt đối mọi thông tin trong thanh tra.",
    },
    {
        question: ` Sự cần thiết Quân đội tham gia lao động sản xuất, kết hợp quốc phòng với kinh tế - xã hội trong tình hình mới là gì?`,
        options: [
            `A. Tìm kiếm lợi nhuận thương mại tối đa để tự chủ ngân sách.`,
            `B. Thay thế hoàn toàn các doanh nghiệp dân sự tại địa bàn chiến lược.`,
            `C. Xuất phát từ yêu cầu của sự nghiệp đổi mới, công nghiệp hoá, hiện đại hoá đất nước, xây dựng và bảo vệ Tổ quốc trong tình hình mới`,
        ],
        answer: "C. Xuất phát từ yêu cầu của sự nghiệp đổi mới, công nghiệp hoá, hiện đại hoá đất nước, xây dựng và bảo vệ Tổ quốc trong tình hình mới",
    },
    {
        question: ` Mục tiêu cốt lõi của Quân đội khi tham gia lao động sản xuất, kết hợp quốc phòng với kinh tế - xã hội trong tình hình mới là gì?`,
        options: [
            `A. Tìm kiếm lợi nhuận thương mại tối đa để tự chủ ngân sách.`,
            `B. Thay thế hoàn toàn các doanh nghiệp dân sự tại địa bàn chiến lược.`,
            `C. Đẩy mạnh sản xuất góp phần tăng giá trị xuất khẩu.`,
            `D. Gia tăng năng lực quốc phòng, bảo đảm an sinh xã hội và xây dựng thế trận lòng dân.`,
        ],
        answer: "D. Gia tăng năng lực quốc phòng, bảo đảm an sinh xã hội và xây dựng thế trận lòng dân.",
    },
    {
        question: ` Giải pháp cơ bản nâng cao hiệu quả thực hiện nhiệm vụ tham gia lao động sản xuất, kết hợp quốc phòng với kinh tế - xã hội của Quân đội trong tình hình mới là gì?`,
        options: [
            `A. Tăng cường sự lãnh đạo, chỉ đạo của cấp ủy, chỉ huy các cấp đối với nhiệm vụ tham gia lao động sản xuất, kết hợp quốc phòng với kinh tế - xã hội`,
            `B. Tập trung nguồn lực, đẩy nhanh tiến độ xây dựng và nâng cao hiệu quả hoạt động của các khu kinh tế - quốc phòng`,
            `C. Đẩy mạnh sắp xếp, đổi mới, phát triển và nâng cao hiệu quả sản xuất, kinh doanh của các doanh nghiệp quân đội`,
            `D. Cả 3 phương án trên.`,
        ],
        answer: "D. Cả 3 phương án trên.",
    },
    {
        question: ` Một trong những giải pháp đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh trở thành nhu cầu tự thân của cán bộ, đảng viên, quần chúng trong Quân đội hiện nay là gì?`,
        options: [
            `A. Tăng cường công tác kiểm điểm hằng năm ở từng cấp ủy, chi bộ, coi đó là hình thức bắt buộc để đánh giá cán bộ.`,
            `B. Duy trì nghiêm chế độ sinh hoạt chi bộ, trong đó lấy phê bình cá nhân làm trọng tâm để giữ vững nguyên tắc tập trung dân chủ.`,
            `C. Tăng cường sự lãnh đạo, chỉ đạo của cấp ủy đảng, chỉ huy các cấp về đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh trở thành nhu cầu tự thân của cán bộ, đảng viên, quần chúng trong quân đội hiện nay.`,
            `D. Cả 3 phương án trên.`,
        ],
        answer: "C. Tăng cường sự lãnh đạo, chỉ đạo của cấp ủy đảng, chỉ huy các cấp về đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh trở thành nhu cầu tự thân của cán bộ, đảng viên, quần chúng trong quân đội hiện nay.",
    },
    {
        question: ` Một trong những giải pháp đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh trở thành nhu cầu tự thân của cán bộ, đảng viên, quần chúng trong Quân đội hiện nay là gì?`,
        options: [
            `A. Xây dựng môi trường văn hóa quân sự tốt đẹp, lành mạnh, tạo nền tảng để việc học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh trở thành nhu cầu tự thân của cán bộ, đảng viên, quần chúng trong Quân đội hiện nay.`,
            `B. Đẩy mạnh công tác tuyên truyền, giáo dục truyền thống.`,
            `C. Xây dựng môi trường văn hóa quân sự phong phú, lành mạnh.,`,
        ],
        answer: "A. Xây dựng môi trường văn hóa quân sự tốt đẹp, lành mạnh, tạo nền tảng để việc học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh trở thành nhu cầu tự thân của cán bộ, đảng viên, quần chúng trong Quân đội hiện nay.",
    },
    {
        question: ` Mục tiêu trọng tâm của “Chiến dịch 500 ngày đêm” là gì?`,
        options: [
            `A. Xây dựng các nghĩa trang liệt sĩ mới.`,
            `B. Đẩy mạnh thực hiện tìm kiếm, quy tập và xác định danh tính hài cốt liệt sĩ còn thiếu thông tin.`,
            `C. Tổ chức các hoạt động văn hóa.`,
            `D. Đẩy mạnh thực hiện tìm kiếm, quy tập hài cốt liệt sĩ.`,
        ],
        answer: "B. Đẩy mạnh thực hiện tìm kiếm, quy tập và xác định danh tính hài cốt liệt sĩ còn thiếu thông tin.",
    },
    {
        question: ` “Chiến dịch 500 ngày đêm” thể hiện đạo lý truyền thống nào của dân tộc Việt Nam?`,
        options: [`A. Uống nước nhớ nguồn.`, `B. Yêu nước.`, `C. Lá lành đùm lá rách.`, `D. Nhân nghĩa.`],
        answer: "A. Uống nước nhớ nguồn.",
    },
    {
        question: ` Nghị quyết số 24-NQ/TW ngày 22/8/2026 của Bộ Chính trị có tiêu đề là gì?`,
        options: [
            `A. Về Chiến lược công tác tư tưởng của Đảng trong giai đoạn mới.`,
            `B. Về phát huy tính tiên phong, gương mẫu, tinh thần đổi mới, dám nghĩ, dám làm, dám chịu trách nhiệm của đội ngũ cán bộ, đảng viên trong kỷ nguyên mới.`,
            `C. Về phát huy tính tiên phong, gương mẫu của đội ngũ cán bộ, đảng viên trong kỷ nguyên mới.`,
            `D. Về đẩy mạnh học tập, thực hành tư tưởng, đạo đức, phương pháp và phong cách Hồ Chí Minh trong giai đoạn phát triển mới.`,
        ],
        answer: "B. Về phát huy tính tiên phong, gương mẫu, tinh thần đổi mới, dám nghĩ, dám làm, dám chịu trách nhiệm của đội ngũ cán bộ, đảng viên trong kỷ nguyên mới.",
    },
    {
        question: ` Đồng chí cho biết, Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị có tiêu đề là gì?`,
        options: [
            `A. Về "Đẩy mạnh học tập, thực hành tư tưởng, đạo đức, phong cách Hồ Chí Minh trong giai đoạn phát triển mới".`,
            `B. Về "Đẩy mạnh học tập, thực hành phương pháp, phong cách Hồ Chí Minh trong giai đoạn phát triển mới"`,
            `C. Về "Đẩy mạnh học tập, thực hành tư tưởng, đạo đức, phương pháp, phong cách Hồ Chí Minh trong giai đoạn phát triển mới".`,
            `D. Về "Đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh"`,
        ],
        answer: 'C. Về "Đẩy mạnh học tập, thực hành tư tưởng, đạo đức, phương pháp, phong cách Hồ Chí Minh trong giai đoạn phát triển mới".',
    },
    {
        question: ` Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị về "Đẩy mạnh học tập, thực hành tư tưởng, đạo đức, phương pháp, phong cách Hồ Chí Minh trong giai đoạn phát triển mới" có điểm mới cốt lõi gì?`,
        options: [
            `A. Yêu cầu học tập và làm theo Bác phải thường xuyên hơn.`,
            `B. Người đứng đầu phải nêu gương trong học tập và làm theo Bác.`,
            `C. Bổ sung thành tố "phương pháp Hồ Chí Minh" vào nội dung cốt lõi của việc học tập, thực hành di sản Hồ Chí Minh.`,
            `D. Bổ sung thành tố "phong cách Hồ Chí Minh" vào nội dung cốt lõi của việc học tập, thực hành di sản Hồ Chí Minh.`,
        ],
        answer: 'C. Bổ sung thành tố "phương pháp Hồ Chí Minh" vào nội dung cốt lõi của việc học tập, thực hành di sản Hồ Chí Minh.',
    },
    {
        question: ` Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị về "Đẩy mạnh học tập, thực hành tư tưởng, đạo đức, phương pháp, phong cách Hồ Chí Minh trong giai đoạn phát triển mới" có điểm mới cốt lõi gì?`,
        options: [
            `A. Yêu cầu học tập và làm theo Bác phải thường xuyên hơn.`,
            `B. Người đứng đầu phải nêu gương trong học tập và làm theo Bác.`,
            `C. Bổ sung thành tố "phong cách Hồ Chí Minh" vào nội dung cốt lõi của việc học tập, thực hành di sản Hồ Chí Minh.`,
            `D. Chuyển mạnh từ tư duy "làm theo" sang hành động "thực hành"`,
        ],
        answer: 'D. Chuyển mạnh từ tư duy "làm theo" sang hành động "thực hành"',
    },
    {
        question: ` Đồng chí cho biết, Nghị quyết số 26-NQ/TW ngày 22/8/2026 của Bộ Chính trị có tiêu đề là gì?`,
        options: [
            `A.	"Đẩy mạnh học tập, thực hành tư tưởng, đạo đức, phương pháp, phong cách Hồ Chí Minh trong giai đoạn phát triển mới".`,
            `B.	Về phát triển du lịch Việt Nam trở thành ngành kinh tế mũi nhọn trong kỷ nguyên mới.`,
            `C.	Về phát triển giáo dục, đào tạo Việt Nam trong kỷ nguyên mới.`,
            `D.	Về Chiến lược công tác tư tưởng trong giai đoạn phát triển mới.`,
        ],
        answer: "B. Về phát triển du lịch Việt Nam trở thành ngành kinh tế mũi nhọn trong kỷ nguyên mới.",
    },
    {
        question: ` Đồng chí cho biết, Nghị quyết số 27-NQ/TW ngày 28/8/2026 của Bộ Chính trị có tiêu đề là gì?`,
        options: [
            `A. Về phát triển các vùng và tổ chức không gian phát triển quốc gia trong giai đoạn mới.`,
            `B. Về phát triển du lịch Việt Nam trở thành ngành kinh tế mũi nhọn trong kỷ nguyên mới.`,
            `C. Về phát triển giáo dục, đào tạo Việt Nam trong kỷ nguyên mới.`,
            `D. Về Chiến lược công tác tư tưởng trong giai đoạn phát triển mới.`,
        ],
        answer: "A. Về phát triển các vùng và tổ chức không gian phát triển quốc gia trong giai đoạn mới.",
    },
    {
        question: ` Đồng chí cho biết, Nghị quyết số 25-NQ/TW ngày 22/8/2026 của Bộ Chính trị có tiêu đề là gì?`,
        options: [
            `A. Về công tác người Việt Nam ở nước ngoài.`,
            `B. Về phát triển du lịch Việt Nam trở thành ngành kinh tế mũi nhọn trong kỷ nguyên mới.`,
            `C. Về phát triển các vùng và tổ chức không gian phát triển quốc gia trong giai đoạn mới.`,
            `D. Về Chiến lược công tác tư tưởng trong bối cảnh mới.`,
        ],
        answer: "D. Về Chiến lược công tác tư tưởng trong bối cảnh mới.",
    },
    {
        question: ` Đồng chí cho biết, Nghị quyết số 23-NQ/TW ngày 02/8/2026 của Bộ Chính trị có tiêu đề là gì?`,
        options: [
            `A.	Về công tác người Việt Nam ở nước ngoài.`,
            `B.	Về phát triển du lịch Việt Nam trở thành ngành kinh tế mũi nhọn trong kỷ nguyên mới.`,
            `C.	Về phát triển các vùng và tổ chức không gian phát triển quốc gia trong giai đoạn mới.`,
            `D.	Về Chiến lược công tác tư tưởng trong bối cảnh mới.`,
        ],
        answer: "A.	Về công tác người Việt Nam ở nước ngoài.",
    },
];

export default quizData;
