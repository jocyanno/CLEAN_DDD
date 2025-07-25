import { PaginationParams } from "@/core/repositories/pagination-params";
import { QuestionCommentsRepository } from "@/domain/forum/application/repositories/question-comments-repository";
import { QuestionComment } from "@/domain/forum/enterprise/entities/question-comments";

export class InMemoryQuestionCommentsRepository
  implements QuestionCommentsRepository
{
  public items: any[] = [];

  async findById(id: string) {
    const questionComment = this.items.find((item) => item.id === id);

    if (!questionComment) {
      return null;
    }

    return questionComment;
  }

  async findManyByQuestionId(questionId: string, { page }: PaginationParams) {
    const questionComments = this.items
      .filter((item) => item.questionId.toString() === questionId)
      .slice((page - 1) * 20, page * 20);

    return questionComments;
  }

  async create(questionComment: QuestionComment): Promise<void> {
    this.items.push(questionComment);
  }

  async delete(questionComment: QuestionComment) {
    const index = this.items.findIndex(
      (item) => item.id === questionComment.id
    );
    this.items.splice(index, 1);
  }
}
