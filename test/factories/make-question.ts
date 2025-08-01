import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import {
  Question,
  QuestionProps
} from "@/domain/forum/enterprise/entities/question";
import { Slug } from "@/domain/forum/enterprise/entities/value-objects/slug";

import { faker } from "@faker-js/faker";

export function makeQuestion(
  override: Partial<QuestionProps> = {},
  id?: UniqueEntityID
): Question {
  const question = Question.create(
    {
      title: faker.lorem.sentence(),
      slug: Slug.create("test-question"),
      authorId: new UniqueEntityID(),
      content: faker.lorem.text(),
      ...override
    },
    id
  );

  return question;
}
