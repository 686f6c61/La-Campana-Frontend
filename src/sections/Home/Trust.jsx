import trustTexts from "../../utils/trustTexts";

const Trust = () => {
	return (
		<section className="relative max-w-screen-desktop w-full justify-self-center">
			<div className="absolute -z-10 bg-lacampana-red1 h-2/3 left-0 right-0 rounded-t-2xl overflow-hidden">
				<img className="opacity-30 h-full object-cover w-full" src="/images/background.jpeg" alt="bg-trust-section" />
			</div>
			<div className="flex flex-col gap-8 items-center py-32 px-2 tablet:px-8">
				<h2 className="text-white">Tranquilidad y confianza</h2>
				<p className="text-white">En <strong>La Campana</strong>, queremos que tu experiencia de compra sea excepcional. Por eso, te ofrecemos una serie de beneficios y garantías que te darán la tranquilidad y la confianza que necesitas para realizar tu compra</p>
				<ul className="grid grid-cols-2 desktop:grid-cols-4 gap-4">
					{trustTexts.map(feature =>
						<article className="bg-lacampana-white p-4 tablet:p-8 text-start rounded-tl-2xl flex flex-col gap-4">
							<img className="h-16 w-16 object-contain" src={feature.icon} alt="icon" />
							<div className="flex flex-col gap-4">
								<h4>{feature.title}</h4>
								<p>{feature.description}</p>
							</div>
						</article>
					)}
				</ul>
			</div>
		</section>
	);
};

export default Trust;
