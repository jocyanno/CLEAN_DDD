import { UniqueEntityID } from "@/core/entities/unique-entity-id";

import { InMemoryAnswerRepository } from "test/repositories/in-memory-answer-repository";
import { makeAnswer } from "test/factories/make-answer";
import { ChooseQuestionBestAnswerUseCase } from "./choose-question-best-answer";
import { InMemoryQuestionsRepository } from "test/repositories/in-memory-questions-repository";
import { makeQuestion } from "test/factories/make-question";
import { NotAllowedError } from "./errors/not-allowed-error";

let inMemoryAnswersRepository: InMemoryAnswerRepository;
let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: ChooseQuestionBestAnswerUseCase;

describe("Choose Question Best Answer", () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswerRepository();
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository();

    sut = new ChooseQuestionBestAnswerUseCase(
      inMemoryAnswersRepository,
      inMemoryQuestionsRepository
    );
  });

  it("should be able to choose question best answer", async () => {
    const question = makeQuestion();

    const answer = makeAnswer({
      questionId: new UniqueEntityID(question.id)
    });

    await inMemoryQuestionsRepository.create(question);
    await inMemoryAnswersRepository.create(answer);

    await sut.execute({
      answerId: answer.id.toString(),
      authorId: question.authorId.toString()
    });

    expect(
      inMemoryQuestionsRepository.items[0].bestAnswerId?.toString()
    ).toEqual(answer.id);
  });

  it("should not be able to choose another user question best answer", async () => {
    const question = makeQuestion({
      authorId: new UniqueEntityID("author-1")
    });

    const answer = makeAnswer({ questionId: new UniqueEntityID(question.id) });

    await inMemoryQuestionsRepository.create(question);
    await inMemoryAnswersRepository.create(answer);

    const result = await sut.execute({
      answerId: answer.id.toString(),
      authorId: "author-2"
    });

    expect(result.isLeft()).toBe(true);
    expect(result.value).toBeInstanceOf(NotAllowedError);
  });
});
