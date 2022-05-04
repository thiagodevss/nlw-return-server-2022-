import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {

    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Example comment',
      screenshot: 'data:image/png;base64asdasdasdasdsasdas'
    })).resolves.not.toThrow();
    expect(sendMailSpy).toBeCalled();
    expect(createFeedbackSpy).toBeCalled();

  })


  it('should be able to submit feedback without type', async () => {

    await expect(submitFeedback.execute({
      type: '',
      comment: 'Example comment',
      screenshot: 'data:image/png;base64asdasdasdasdsasdas'
    })).resolves.not.toThrow();
  })

  it('should be able to submit feedback invalid type img', async () => {

    await expect(submitFeedback.execute({
      type: '',
      comment: 'Example comment',
      screenshot: 'img.jpg'
    })).resolves.not.toThrow();
  })


  it('should be able to submit feedback without comment', async () => {

    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64asdasdasdasdsasdas'
    })).resolves.not.toThrow();
  })
})