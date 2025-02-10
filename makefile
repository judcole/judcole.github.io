
#!/usr/bin/make -f

# 02/09/25 Jud Cole GitHub profile Web site make configuration

CURRENT_DATE:=$(shell date +%F)
CURRENT_DATE_TIME:=$(shell date +%FT%T%Z)

.PHONY: build clean deploy zip

# spell-checker: ignore webp

# help: @ List the available make tasks
help:
	@grep -Eho '[0-9a-zA-Z_\.\-]+:.*?@ .*' $(MAKEFILE_LIST) | \
	awk 'BEGIN {FS = ":.*?@ "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' | sort

# build: @ Build the Web site by copying from the portfolio project
build: clean
	cp -prv ../jc-portfolio/build/* .

# clean: @ Clean up all generated files
clean:
	rm -fr _astro
	rm -fr blog
	rm -fr projects
	rm -fr resume
	rm -fr services
	rm -fr store
	rm -f *.html
	rm -f *.svg
	rm -f *.txt
	rm -f *.webp
	rm -f *.xml

# deploy: @ Build and deploy the Web site to the live site
deploy: build
	git push

# zip: @ Zip up the unique source files
zip: clean
	rm -fr ${PWD}-$(CURRENT_DATE).7z
	7z a ${PWD}-$(CURRENT_DATE) -bt -mhe=on -mmt8 -mx9 -r '-x!*.git' '-x!*.7z' .
