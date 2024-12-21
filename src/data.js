const questions = [
	{
		id: 1,
		category: "S",
		question: "Tôi thấy khó mà thoải mái được.",
		options: [
			{ text: "Không đúng với tôi chút nào cả", score: 0 },
			{ text: "Đúng với tôi phần, hoặc thỉnh thoảng mới đúng", score: 1 },
			{
				text: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng",
				score: 2,
			},
			{
				text: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng",
				score: 3,
			},
		],
	},
	{
		id: 2,
		category: "A",
		question: "Tôi bị khô miệng.",
		options: [
			{ text: "Không đúng với tôi chút nào cả", score: 0 },
			{ text: "Đúng với tôi phần, hoặc thỉnh thoảng mới đúng", score: 1 },
			{
				text: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng",
				score: 2,
			},
			{
				text: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng",
				score: 3,
			},
		],
	},
	{
		id: 3,
		category: "D",
		question: "Tôi không thấy có chút cảm xúc tích cực nào.",
		options: [
			{ text: "Không đúng với tôi chút nào cả", score: 0 },
			{ text: "Đúng với tôi phần, hoặc thỉnh thoảng mới đúng", score: 1 },
			{
				text: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng",
				score: 2,
			},
			{
				text: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng",
				score: 3,
			},
		],
	},
	{
		id: 4,
		category: "A",
		question:
			"Tôi bị rối loạn nhịp thở (thở gấp, khó thở dù chẳng làm việc gì nặng).",
		options: [
			{ text: "Không đúng với tôi chút nào cả", score: 0 },
			{ text: "Đúng với tôi phần, hoặc thỉnh thoảng mới đúng", score: 1 },
			{
				text: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng",
				score: 2,
			},
			{
				text: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng",
				score: 3,
			},
		],
	},
	{
		id: 5,
		category: "D",
		question: "Tôi thấy khó bắt tay vào công việc.",
		options: [
			{ text: "Không đúng với tôi chút nào cả", score: 0 },
			{ text: "Đúng với tôi phần, hoặc thỉnh thoảng mới đúng", score: 1 },
			{
				text: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng",
				score: 2,
			},
			{
				text: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng",
				score: 3,
			},
		],
	},
	{
		id: 6,
		category: "S",
		question: "Tôi đã phản ứng thái quá khi có những sự việc xảy ra.",
		options: [
			{ text: "Không đúng với tôi chút nào cả", score: 0 },
			{ text: "Đúng với tôi phần, hoặc thỉnh thoảng mới đúng", score: 1 },
			{
				text: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng",
				score: 2,
			},
			{
				text: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng",
				score: 3,
			},
		],
	},
	{
		id: 7,
		category: "A",
		question: "Tôi bị ra mồ hôi (chẳng hạn như mồ hôi tay...).",
		options: [
			{ text: "Không đúng với tôi chút nào cả", score: 0 },
			{ text: "Đúng với tôi phần, hoặc thỉnh thoảng mới đúng", score: 1 },
			{
				text: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng",
				score: 2,
			},
			{
				text: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng",
				score: 3,
			},
		],
	},

	{
		id: 8,
		category: "S",
		question: "Tôi thấy mình đang suy nghĩ quá nhiều.",
		options: [
			{ text: "Không đúng với tôi chút nào cả", score: 0 },
			{ text: "Đúng với tôi phần, hoặc thỉnh thoảng mới đúng", score: 1 },
			{
				text: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng",
				score: 2,
			},
			{
				text: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng",
				score: 3,
			},
		],
	},
	{
		id: 9,
		category: "A",
		question:
			"Tôi lo lắng về những tình huống có thể khiến tôi hoảng sợ hoặc biến tôi thành trò cười.",
		options: [
			{ text: "Không đúng với tôi chút nào cả", score: 0 },
			{ text: "Đúng với tôi phần, hoặc thỉnh thoảng mới đúng", score: 1 },
			{
				text: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng",
				score: 2,
			},
			{
				text: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng",
				score: 3,
			},
		],
	},
	{
		id: 10,
		category: "D",
		question: "Tôi thấy mình chẳng có gì để mong đợi cả.",
		options: [
			{ text: "Không đúng với tôi chút nào cả", score: 0 },
			{ text: "Đúng với tôi phần, hoặc thỉnh thoảng mới đúng", score: 1 },
			{
				text: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng",
				score: 2,
			},
			{
				text: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng",
				score: 3,
			},
		],
	},
	{
		id: 11,
		category: "S",
		question: "Tôi thấy bản thân dễ bị kích động.",
		options: [
			{ text: "Không đúng với tôi chút nào cả", score: 0 },
			{ text: "Đúng với tôi phần, hoặc thỉnh thoảng mới đúng", score: 1 },
			{
				text: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng",
				score: 2,
			},
			{
				text: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng",
				score: 3,
			},
		],
	},
	{
		id: 12,
		category: "S",
		question: "Tôi thấy khó thư giãn được.",
		options: [
			{ text: "Không đúng với tôi chút nào cả", score: 0 },
			{ text: "Đúng với tôi phần, hoặc thỉnh thoảng mới đúng", score: 1 },
			{
				text: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng",
				score: 2,
			},
			{
				text: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng",
				score: 3,
			},
		],
	},
	{
		id: 13,
		category: "D",
		question: "Tôi cảm thấy chán nản, thất vọng.",
		options: [
			{ text: "Không đúng với tôi chút nào cả", score: 0 },
			{ text: "Đúng với tôi phần, hoặc thỉnh thoảng mới đúng", score: 1 },
			{
				text: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng",
				score: 2,
			},
			{
				text: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng",
				score: 3,
			},
		],
	},
	{
		id: 14,
		category: "S",
		question:
			"Tôi không chấp nhận được việc có cái gì đó xen vào cản trở việc tôi đang làm.",
		options: [
			{ text: "Không đúng với tôi chút nào cả", score: 0 },
			{ text: "Đúng với tôi phần, hoặc thỉnh thoảng mới đúng", score: 1 },
			{
				text: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng",
				score: 2,
			},
			{
				text: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng",
				score: 3,
			},
		],
	},

	{
		id: 15,
		category: "A",
		question: "Tôi thấy mình gần như hoảng loạn.",
		options: [
			{ text: "Không đúng với tôi chút nào cả", score: 0 },
			{ text: "Đúng với tôi phần, hoặc thỉnh thoảng mới đúng", score: 1 },
			{
				text: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng",
				score: 2,
			},
			{
				text: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng",
				score: 3,
			},
		],
	},
	{
		id: 16,
		category: "D",
		question: "Tôi không thấy hăng hái với bất kỳ việc gì nữa.",
		options: [
			{ text: "Không đúng với tôi chút nào cả", score: 0 },
			{ text: "Đúng với tôi phần, hoặc thỉnh thoảng mới đúng", score: 1 },
			{
				text: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng",
				score: 2,
			},
			{
				text: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng",
				score: 3,
			},
		],
	},
	{
		id: 17,
		category: "D",
		question: "Tôi cảm thấy mình chẳng đáng làm người.",
		options: [
			{ text: "Không đúng với tôi chút nào cả", score: 0 },
			{ text: "Đúng với tôi phần, hoặc thỉnh thoảng mới đúng", score: 1 },
			{
				text: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng",
				score: 2,
			},
			{
				text: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng",
				score: 3,
			},
		],
	},
	{
		id: 18,
		category: "S",
		question: "Tôi thấy mình khá dễ phật ý, tự ái.",
		options: [
			{ text: "Không đúng với tôi chút nào cả", score: 0 },
			{ text: "Đúng với tôi phần, hoặc thỉnh thoảng mới đúng", score: 1 },
			{
				text: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng",
				score: 2,
			},
			{
				text: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng",
				score: 3,
			},
		],
	},
	{
		id: 19,
		category: "A",
		question:
			"Tôi nghe thấy rõ tiếng nhịp tim dù chẳng làm việc gì cả (ví dụ, tiếng nhịp tim tăng, tiếng tim loạn nhịp).",
		options: [
			{ text: "Không đúng với tôi chút nào cả", score: 0 },
			{ text: "Đúng với tôi phần, hoặc thỉnh thoảng mới đúng", score: 1 },
			{
				text: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng",
				score: 2,
			},
			{
				text: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng",
				score: 3,
			},
		],
	},
	{
		id: 20,
		category: "A",
		question: "Tôi hay sợ vô cớ.",
		options: [
			{ text: "Không đúng với tôi chút nào cả", score: 0 },
			{ text: "Đúng với tôi phần, hoặc thỉnh thoảng mới đúng", score: 1 },
			{
				text: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng",
				score: 2,
			},
			{
				text: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng",
				score: 3,
			},
		],
	},
	{
		id: 21,
		category: "D",
		question: "Tôi thấy cuộc sống vô nghĩa.",
		options: [
			{ text: "Không đúng với tôi chút nào cả", score: 0 },
			{ text: "Đúng với tôi phần, hoặc thỉnh thoảng mới đúng", score: 1 },
			{
				text: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng",
				score: 2,
			},
			{
				text: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng",
				score: 3,
			},
		],
	},
];

export default questions;
