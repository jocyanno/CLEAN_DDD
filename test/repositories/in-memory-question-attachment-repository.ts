import { QuestionAttachmentRepository } from "@/domain/forum/application/repositories/question-attachments-repository";

export class InMemoryQuestionAttachmentRepository
  implements QuestionAttachmentRepository
{
  public items: any[] = [];

  async findManyByQuestionId(questionId: string) {
    const questionAttachments = this.items.filter(
      (item) => item.questionId.toString() === questionId
    );
    return questionAttachments;
  }

  async deleteManyByQuestionId(questionId: string) {
    const questionAttachments = this.items.filter(
      (item) => item.questionId.toString() !== questionId
    );
    this.items = questionAttachments;
  }
}
