
#!/usr/bin/make -f

# 11/13/22 Jud Cole GitHub profile Web site make configuration

CURRENT_DATE:=$(shell date +%F)
CURRENT_DATE_TIME:=$(shell date +%FT%T%Z)

.PHONY: build clean deploy zip

# help: @ List the available make tasks
help:
	@egrep -oh '[0-9a-zA-Z_\.\-]+:.*?@ .*' $(MAKEFILE_LIST) | \
	awk 'BEGIN {FS = ":.*?@ "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' | sort

# build: @ Build the Web site
build: clean
	cp -prv ../websites/jc-website/build/* .

# clean: @ Clean up all generated files
clean:
	rm -fr _app
	rm -fr images
	rm -fr about.html
	rm -fr favicon.png
	rm -fr index.html
	rm -fr vite-manifest.json

# deploy: @ Build and deploy the Web site to the live site
deploy: build
	git push

# zip: @ Zip up the unique source files
zip: clean
	rm -fr ${PWD}-$(CURRENT_DATE).7z
	7z a ${PWD}-$(CURRENT_DATE) -bt -mhe=on -mmt8 -mx9 -r '-x!*.git' '-x!*.7z' .
