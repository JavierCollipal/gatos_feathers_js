const app = require('../../src/app');

describe("'cat' service", () => {
	it('registered the service', () => {
		const service = app.service('cat');
		expect(service).toBeTruthy();
	});
	describe('catService->adoptOne', () => {
		it('should call model->findByIdAndUpdate', () => {});
		it('catModel->findByIdAndUpdate should be called with the id and the query config as parameters', () => {});
		it('catModel->findByIdAndUpdate should return the modified cat', () => {});
	});
});
